const router = require('express').Router();
// const booksRoutes = require('./api/book_routes');
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');
const cartRoutes = require('./api/cart-route');
const browseRoutes = require('./api/browse-route');
const addressRoutes = require('./api/address-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/cart', cartRoutes);
router.use('/address', addressRoutes);
router.use('/browse', browseRoutes);

module.exports = router;
