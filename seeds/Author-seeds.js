const { Author } = require('../models');

const authorSeeds = [
  {
    name: 'J.K. Rowling',
    bio: 'J.K. Rowling is a British author, best known for writing the Harry Potter series.',
  },
  {
    name: 'Stephen King',
    bio: 'Stephen King is an American author, known for his horror and suspense novels.',
  },
  {
    name: 'Jane Austen',
    bio: 'Jane Austen was an English novelist, famous for her romantic fiction works such as Pride and Prejudice.',
  },
];

const seedAuthors = () => Author.bulkCreate(authorSeeds);

module.exports = seedAuthors;
