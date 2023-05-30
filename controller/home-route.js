const router = require('express').Router();
const {Book} = require('../models');
const Cart = require('../models/Cart'); 
const User = require('../models/User');
const OrderItem = require('../models/OrderItem'); 
const Order = require('../models/Order'); 

// route to get all dishes
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.render('home', {loggedIn: req.session?.loggedIn, user: req.session?.user});
  });

// Login page
router.get('/login', (req, res) => {
  res.render('login', {loggedIn: req.session?.loggedIn, user: req.session?.user}); // Render the login.handlebars template
});


// Sign up page
router.get('/sign-up', (req, res) => {
  res.render('signup', {loggedIn: req.session?.loggedIn, user: req.session?.user}); // Render the signup.handlebars template
});

// Logout page
router.get('/logout', (req, res) => {
  res.redirect('/api/auth/logout');
});

router.get('/book/:id', async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id)
    const book = dbBookData.get({ plain: true });

    res.render('book', { 
      book,
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create new item 
router.post('/cart', async (req, res) => {
  try {
    const cart = await Cart.create({
      user_id: 1,
      book_id: parseInt(req.body.id)
    });

    const cartData = await Cart.findAll({
      where: { user_id: 1 }, 
      include: [
        { model: Book, as: 'book' } 
      ]
    });

    const carts = cartData.map((cart) => cart.get({ plain: true }));

    res.status(201).render('cart', { 
      cart: carts,      
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
     });
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ error: 'Failed to create cart' });
  }
});

router.get('/cart', async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      where: { user_id: 1 }, 
      include: [
        { model: Book, as: 'book' } 
      ]
    });

    const carts = cartData.map((cart) => cart.get({ plain: true }));

    res.render('cart', { 
      cart: carts ,
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
    });

  } catch (error) {
    console.error('Error retrieving cart:', error);
    res.status(500).json({ error: 'Failed to retrieve cart' });
  }
});


router.post('/cart/:id', async (req, res) => {
  const cart_Id = req.params.id;
  try {
    await Cart.destroy({ where: { id: cart_Id } });

    res.redirect('/cart'); 
  } catch (error) {
    console.error('Error deleting book from cart:', error);
    res.status(500).json({ error: 'Failed to delete book from cart' });
  }
});

router.post('/order', async (req, res) => {

  try {

    // Retrieve the cart items for the user from the Cart model
    const cartItems = await Cart.findAll({
      where: { user_id: 1 },
      include: [{ model: Book }]
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: 'No cart items found for the user' });
    }

    // Create an order list
    const orderList = [];

    // Loop through the cart items and create orders
    for (const cartItem of cartItems) {
      const { book } = cartItem;
      const order = await Order.create({ 
        user_id: 1, 
        book_id: book.id 
      });
      orderList.push(order);
    }


    await Cart.destroy({ where: { user_id: 1 }})
;
    res.redirect('/purchased'); 
  } catch (error) {
    console.error('Error deleting book from cart:', error);
    res.status(500).json({ error: 'Failed to delete book from cart' });
  }
});

  

router.get('/purchased', async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.findAll({
      where: { user_id: 1 },
      include: [{ model: Book }]
    });

    const groupedOrders = {};
    orders.forEach((order) => {
      const { id, user_id, book } = order;
      if (!groupedOrders[id]) {
        groupedOrders[id] = { order_id: id, user_id, books: [] };
      }
      groupedOrders[id].books.push({ book_title: book.title });
    });

    const orderData = Object.values(groupedOrders);

    res.render('purchased', { 
      orders: orderData,
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
    });

  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



router.post('/upload', async (req, res) => {
  try {
    const { title, 
      author, 
      publication_year, 
      isbn, 
      price, 
      quantity, 
      description, 
      genre_id, 
      author_id, 
      image_link 
    } = req.body;

    const book = await Book.create({
      title,
      author,
      publication_year,
      isbn,
      price,
      quantity,
      description,
      genre_id,
      author_id,
      image_link
    });

    // res.status(201).json(book);
    res.status(201).render('browse', {     
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
     });
  } catch (error) {
    console.error('Error uploading book information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/upload', (req, res) => {
  res.render('upload', {      
    loggedIn: req.session?.loggedIn, 
    user: req.session?.user
   });
});


router.put('/book/:id/edit', async (req, res) => {
  try {
    const bookId = req.params.id;

    const updatedBook = await Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        publication_year: req.body.publication_year,
        isbn: req.body.isbn,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        genre_id: req.body.genre_id,
        author_id: req.body.author_id,
        image_link: req.body.image_link,
      },
      {
        where: {
          id: bookId,
        },
      }
    );

    if (!updatedBook[0]) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
