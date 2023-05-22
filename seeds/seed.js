const userSeeds = require('./User-seeds');
const bookSeeds = require('./Book-seeds');
const genreSeeds = require('./Genre-seeds');
const authorSeeds = require('./Author-seeds');

genreSeeds();
authorSeeds();
bookSeeds();
userSeeds();