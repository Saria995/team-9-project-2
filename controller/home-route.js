const router = require('express').Router();
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


module.exports = router;
