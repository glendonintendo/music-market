const { Product } = require('../models');

const productData = [
    {
        product_name: "Stevie's Guitar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 4000,
        stock: 1,
        image_path: "../images/stevie.jpg",
        category_id: 5
    },
    {
        product_name: "Ray's Piano",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 10000,
        stock: 1,
        image_path: "../images/ray.jpg",
        category_id: 5
    },
    {
        product_name: "Guitar Picks",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 10,
        stock: 50,
        image_path: "../images/picks.jpg",
        category_id: 2
    },
    {
        product_name: "Band Tee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 20,
        stock: 15,
        image_path: "../images/tee.jpg",
        category_id: 3
    },
    {
        product_name: "New LP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 15,
        stock: 100,
        image_path: "../images/lp.jpg",
        category_id: 4
    },
    {
        product_name: "Best Hits",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 20,
        stock: 10,
        image_path: "../images/hits.jpg",
        category_id: 4
    },
    {
        product_name: "Handcrafted Bow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 100,
        stock: 3,
        image_path: "../images/bow.jpg",
        category_id: 2
    },
    {
        product_name: "Saxophone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 150,
        stock: 8,
        image_path: "../images/saxophone.jpg",
        category_id: 1 
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;