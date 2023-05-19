const User = require('../models/User');

const userSeeds = [
  {
    username: 'john.doe',
    email: 'john.doe@example.com',
    password: 'password123'
  },
  {
    username: 'jane.smith',
    email: 'jane.smith@example.com',
    password: 'abc123'
  },
  {
    username: 'bob.johnson',
    email: 'bob.johnson@example.com',
    password: 'passw0rd'
    },
  // Add more seed objects as needed...
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
