const User = require('./User');
const Book = require('./Book');
const Author = require('./Author');
const Genre = require('./Genre');
const Address = require('./Address');
const Cart = require('./Cart');
const OrderItem = require('./OrderItem');
const Order = require('./Order');
const Purchase = require('./Purchase');

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

User.hasMany(Purchase, {
  foreignKey: 'purchase_id',
  
});

Purchase.belongsTo(User, {
  foreignKey: 'purchase_id'
});

User.hasMany(Cart, {
  foreignKey: 'user_id',
});

Book.hasMany(Cart, {
  foreignKey: 'book_id',
});

Cart.belongsTo(Book, {
  foreignKey: 'book_id',
});

Order.belongsToMany(Book, {
  through: OrderItem,
  foreignKey: 'order_id',
  as: 'books',
});

Book.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: 'book_id',
  as: 'orders',
});

module.exports = {
    User, 
    Book, 
    Author, 
    Genre, 
    Address,
    Cart,
    Purchase,
    OrderItem
};