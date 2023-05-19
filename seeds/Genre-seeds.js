const Genre = require('../models/Genre');

const genreSeeds = [
  {
    name: 'Fantasy',
  },
  {
    name: 'Mystery',
  },
  {
    name: 'Science Fiction',
  },
];

const seedGenres = () => Genre.bulkCreate(genreSeeds);

module.exports = seedGenres;
