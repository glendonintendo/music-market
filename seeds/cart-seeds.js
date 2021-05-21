const { Cart } = require('../models');

const cartData = [
    {

    }
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;