const { Cart } = require('../models');

const cartData = [
    {
        user_id: 1,
        product_id: 1,
        quantity: 1
    },
    {
        user_id: 1,
        product_id: 3,
        quantity: 1
    },
    {
        user_id: 2,
        product_id: 4,
        quantity: 1
    },
    {
        user_id: 2,
        product_id: 5,
        quantity: 1
    }
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;