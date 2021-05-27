const router = require('express').Router();
const sequelize = require('../config/connection')
const { Cart, Category, Product, ProductTag, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('**************************');
    Cart.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: [
            'id',
            'user_id',
            'product_id',
        ],
        include: [{
            model: Product,
            attributes: ['id', 'product_name', 'description', 'price', 'stock', 'category_id'],
            include: {
                model: ProductTag,
                attributes: ['product_id', 'tag_id']
            }
        },
        {
            model: User,
            attributes: ['id', 'email']
        }
        ]
    })
        .then(dbCartData => {
            const cart = dbCartData.map(cart => cart.get({ plain: true }));

            res.render('cart', {
                layout: false,
                cart,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/checkout', withAuth, (req, res) => {
    console.log(req.session);
    console.log('************************');
});

module.exports = router;