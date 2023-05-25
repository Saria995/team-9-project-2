const User = require('./User');
const Book = require('./Book');
const Author = require('./Author');
const Genre = require('./Genre');
const Address = require('./Address');
const Cart = require('./Cart');

// Products belongsTo Category
User.belongsTo(Address, {
  foreignKey: 'address_id',
});

// Categories have many Products
Address.hasMany(User, {
  foreignKey: 'address_id',
});

Book.belongsTo(Genre, {
    foreignKey: 'genre_id',
  });

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

// Products belongToMany Tags (through ProductTag)
Author.hasMany(Book, {
  foreignKey: 'author_id'
});


module.exports = {
    User, 
    Book, 
    Author, 
    Genre, 
    Address
};