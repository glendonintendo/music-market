const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedCarts = require('./cart-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------------');
    await seedUsers();
    console.log('------------');
    await seedCategories();
    console.log('------------');
    await seedProducts();
    console.log('------------');
    await seedTags();
    console.log('------------');
    await seedProductTags();
    console.log('------------');
    await seedCarts();
};

seedAll();