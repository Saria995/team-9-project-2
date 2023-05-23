const router = require('express').Router();
const booksRoutes = require('./book_routes');
const userRoutes = require('./user_routes');

router.use('/books', booksRoutes);
router.use('/auth', userRoutes);


module.exports = router;
