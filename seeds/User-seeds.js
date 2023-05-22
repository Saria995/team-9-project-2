const { User } = require('../models');

const userSeeds = [
  {
    username: 'john.doe',
    email: 'john.doe@example.com',
    password: 'password123',
    address_id: 1
  },
  {
    username: 'jane.smith',
    email: 'jane.smith@example.com',
    password: 'abc123',
    address_id: 2
  },
  {
    username: 'bob.johnson',
    email: 'bob.johnson@example.com',
    password: 'passw0rd',
    address_id: 2
  },
];

const seedUsers = () => User.bulkCreate(userSeeds, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
