const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

// homepage
router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ]
    })
        .then(dbCategoryData => {
            const categories = dbCategoryData.map(categories => categories.get({ plain: true }));

            res.render('homepage', {
                layout: false,
                categories,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// browse page (by category)
router.get('/browse/:id', (req, res) => {
    const categoryPromise = 
        Category.findAll({
            attributes: [
                'id',
                'category_name'
            ]
        });

    const tagPromise = 
        Tag.findAll();

    const productPromise = 
        Product.findAll({
            where: {
                category_id: req.params.id
            },
            attributes: [
                    'id',
                    'product_name',
                    'description',
                    'price',
                    'stock',
                    'image_path'
            ],
            include: [
                {
                    model: Category,
                    attributes: ['id', 'category_name']
                },
                {
                    model: Tag,
                    attributes: ['tag_name'],
                    through: ProductTag
                }
            ]
        });
        
    Promise.all([categoryPromise, productPromise, tagPromise])
        .then(data => {
            const categories = data[0].map(categories => categories.get({ plain: true }));
            const products = data[1].map(products => products.get({ plain: true }));
            const tags = data[2].map(tags => tags.get({ plain: true }));

            res.render('browse', {
                layout: false,
                categories,
                products,
                tags,
                loggedIn: req.session.loggedIn
            });
        });
});

// contact page
router.get('/contact', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ]
    })
        .then(dbCategoryData => {
            const categories = dbCategoryData.map(categories => categories.get({ plain: true }));

            res.render('contact', {
                layout: false,
                categories,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;




