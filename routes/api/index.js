const router = require('express').Router();
const booksRoutes = require('./book_routes');
const userRoutes = require('./user_routes');
const suggesterRoutes = require('./suggester_routes');

router.use('/books', booksRoutes);
router.use('/auth', userRoutes);
router.use('/suggester', suggesterRoutes);


module.exports = router;
