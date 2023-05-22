const { Address } = require('../models');

const addressSeeds = [
    {
    user_id: 1,
    street: '123 Main St',
    city: 'Cityville',
    state: 'Stateville',
    postalCode: '12345',
    country: 'Countryland',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 2,
    street: '456 Elm St',
    city: 'Townsville',
    state: 'Stateland',
    postalCode: '67890',
    country: 'Countryland',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

const seedAddress = () => Address.bulkCreate(addressSeeds);

module.exports = seedAddress;
