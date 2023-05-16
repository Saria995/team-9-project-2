const router = require('express').Router();
const booksRoutes = require('./book-routes');

router.use('/books', booksRoutes);


module.exports = router;
