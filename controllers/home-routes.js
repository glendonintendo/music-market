const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category } = require('../models');

//get all categories 
router.get('/', (req, res) => {
    console.log('*************************');
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ]
    })
        .then(dbCategoryData => {
            const categories = dbCategoryData.map(categories => categories.get({ plain: true }));

            res.render('homepage', {
                categories,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//browse
router.get('categories/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'category_name'
        ]
    })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No Category found with this id' });
                return;
            }

            const categories = dbCategoryData.get({ plain: true });

            res.render('browse', {
                categories,
                loggedIn: req.session.loggedIn
            });
        });
});

//login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});




module.exports = router;




