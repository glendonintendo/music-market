const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Instruments'
    },
    {
        category_name: 'Accessories'
    },
    {
        category_name: 'Merch'
    },
    {
        category_name: 'Vinyl and CDs'
    },
    {
        category_name: "Collector's Items"
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;