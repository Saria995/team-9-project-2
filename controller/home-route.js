const router = require('express').Router();
const {Book} = require('../models');


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
    console.log(book)
    res.render('book', { book
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
