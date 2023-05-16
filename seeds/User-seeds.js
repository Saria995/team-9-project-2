const User = require('../models/user');

const userSeeds = [
  {
    username: 'john.doe',
    email: 'john.doe@example.com',
    password: 'password123',
    book_id: 1,
  },
  {
    username: 'jane.smith',
    email: 'jane.smith@example.com',
    password: 'abc123',
    book_id: 2,
  },
  {
    username: 'bob.johnson',
    email: 'bob.johnson@example.com',
    password: 'passw0rd',
    book_id: 3,
  },
  // Add more seed objects as needed...
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
