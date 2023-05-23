const router = require('express').Router();
const booksRoutes = require('./api/book_routes');
const userRoutes = require('./api/user_routes');
const homeRoutes = require('./api/home-route');
const cartRoutes = require('./api/cart-route');
const addressRoutes = require('./api/address-route');


router.use('/books', booksRoutes);
router.use('/auth', userRoutes);
router.use('/home', homeRoutes);
router.use('/cart', cartRoutes);
router.use('/address', addressRoutes);


module.exports = router;
