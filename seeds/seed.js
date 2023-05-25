const userSeeds = require('./User-seeds');
const bookSeeds = require('./Book-seeds');
const genreSeeds = require('./Genre-seeds');
const authorSeeds = require('./Author-seeds');
const addressSeeds = require('./Address-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await addressSeeds();
    console.log('\n----- ADDRESS SEEDED -----\n');

    await genreSeeds();
    console.log('\n----- GENRE SEEDED -----\n');
  
    await authorSeeds();
    console.log('\n----- AUTHOR SEEDED -----\n');
  
    await bookSeeds();
    console.log('\n----- BOOK SEEDED -----\n');
  
    await userSeeds();
    console.log('\n----- USER SEEDED -----\n');
    process.exit(0);
  };
  
  seedAll();
  