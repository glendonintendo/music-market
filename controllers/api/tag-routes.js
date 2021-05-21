const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', (req, res) => {
    Tag.findAll()
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;