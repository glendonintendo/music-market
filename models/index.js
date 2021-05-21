const Category = require('./Category');
const Tag = require('./Tag');
const Product = require('./Product');
const User = require('./User');
const ProductTag = require('./ProductTag');
const Cart = require('./Cart');

// ============================================================
//                        Categories
// ============================================================

Category.hasMany(Product, {
    foreignKey: 'category_id'
});


// ============================================================
//                           Tags
// ============================================================

Tag.belongsToMany(Product, {
    foreignKey: 'tag_id',
    through: ProductTag
});


// ============================================================
//                        Products
// ============================================================

Product.belongsToMany(Tag, {
    foreignKey: 'product_id',
    through: ProductTag
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Product.belongsToMany(User, {
    foreignKey: 'product_id',
    through: Cart
});


// ============================================================
//                        Users
// ============================================================

User.belongsToMany(Product, {
    foreignKey: 'user_id',
    through: Cart
});


module.exports = {
    Product,
    Category,
    User,
    Tag,
    ProductTag,
    Cart
};