const router = require('express').Router();
const { Cart, Category, Product, ProductTag, Tag, User } = require('../models/');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;