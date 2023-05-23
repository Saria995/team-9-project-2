const router = require('express').Router();
const apiRoutes = require('..');
const withAuth = require('../../middleware/auth');

router.use('/api', apiRoutes);

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, handlebars file is rendered
  //   res.sendFile(path.join(__dirname, '../views/index.html'));
  const books = "Harry Potter";
  res.render('all', { books, loggedIn: req.session?.loggedIn, user: req.session?.user});
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

router.get('/example-protected-route', withAuth, (req, res) => {
  res.send('Currently logged in as user: ' + req.session.user.username);
});

module.exports = router;
