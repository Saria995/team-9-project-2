const { Genre } = require('../models');

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
