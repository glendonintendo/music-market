const { ProductTag } = require('../models');

const productTagData = [
    {

    }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;