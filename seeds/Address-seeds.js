const { Address } = require('../models');

const addressSeeds = [
    {
    street: '123 Main St',
    city: 'Cityville',
    state: 'Stateville',
    postalCode: '12345',
    country: 'Countryland',
  },
  {
    street: '456 Elm St',
    city: 'Townsville',
    state: 'Stateland',
    postalCode: '67890',
    country: 'Countryland',
  }
]

const seedAddress = () => Address.bulkCreate(addressSeeds);

module.exports = seedAddress;
