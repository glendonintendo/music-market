const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
                'id',
                'product_name',
                'price',
                'stock'
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
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
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
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.post('/', (req, res) => {
    /*  req.body should be in format:
        {
            product_name: "Les Paul",
            description: "a really cool guitar"
            price: 7000,
            stock: 1,
            tagIds: [1, 2, 3, 4]
        }
    */
    Product.create(req.body)
        .then((product) => {
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map(tag_id => {
                    return {
                        product_id: product.id,
                        tag_id
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }

            res.status(200).json(product);
        })
        .then(productTagIds => res.status(200).json(productTagIds))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Product.update(req.body, {
        where : {
            id: req.params.id
        }
    })
        .then(product => ProductTag.findAll({ where: { product_id: req.params.id } }))
        .then(productTags => {
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            
            const newProductTags = req.body.tagIds
                .filter(tag_id => !productTagIds.includes(tag_id))
                .map(tag_id => {
                    return {
                        product_id: req.params.id,
                        tag_id
                    };
                });
            
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);
            
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags)
            ]);
        })
        .then(updatedProductTags => res.json(updatedProductTags))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(product => ProductTag.destroy({ where: { product_id: req.params.id }}))
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;