const router = require('express').Router();
// const booksRoutes = require('./api/book_routes');
const apiRoutes = require('./api');
const userRoutes = require('./api/user_routes');
const homeRoutes = require('./api/home-route');
const cartRoutes = require('./api/cart-route');
const browseRoutes = require('./api/browse-route');
const addressRoutes = require('./api/address-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// const addressRoutes = require('./api/address-route');
// router.use('/books', booksRoutes);
router.use('/auth', userRoutes);
router.use('/cart', cartRoutes);
router.use('/address', addressRoutes);
router.use('/browse', browseRoutes);



module.exports = router;
