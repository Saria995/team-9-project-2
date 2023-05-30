const router = require('express').Router();
const {Book} = require('../models');
const Cart = require('../models/Cart'); 
const User = require('../models/User');

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
  // Redirect the user to the /api/auth/logout route
  res.redirect('/api/auth/logout');
});

router.get('/book/:id', async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id)
    const book = dbBookData.get({ plain: true });

    res.render('book', { book
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

    res.status(201).render('cart', { cart: carts });
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ error: 'Failed to create cart' });
  }
});

router.get('/cart', async (req, res) => {
  try {
    // Fetch the updated cart information
    const cartData = await Cart.findAll({
      where: { user_id: 1 }, // Adjust the user ID as per your requirement
      include: [
        { model: Book, as: 'book' } // Include the Book model for book details
      ]
    });

    // Convert the cart data to plain JSON objects
    const carts = cartData.map((cart) => cart.get({ plain: true }));

    console.log(carts);
    // Render the 'cart' view and pass the cart information as a data object
    res.render('cart', { cart: carts });

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

module.exports = router;
