const { User } = require('../models');

const userSeeds = [
  {
    username: 'john.doe',
    email: 'john.doe@example.com',
    address_id: 1,
    password: 'password123'
  },
  {
    username: 'jane.smith',
    email: 'jane.smith@example.com',
    address_id: 2,
    password: 'abc123',
  },
  {
    username: 'bob.johnson',
    email: 'bob.johnson@example.com',
    address_id: 2,
    password: 'passw0rd',
  },
];

const seedUsers = () => User.bulkCreate(userSeeds, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
