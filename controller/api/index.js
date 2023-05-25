const router = require('express').Router();
const apiRoutes = require('..');
// const withAuth = require('../../middleware/auth');

const userRoutes = require('./user_routes');
const browseRoutes = require('./browse-route');
router.use('/users', userRoutes);
router.use('/browse', browseRoutes);

module.exports = router;
