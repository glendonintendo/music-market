const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const cartRoutes = require('./cart-routes');

router.use('/api', apiRoutes);
router.use('/cart', cartRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;