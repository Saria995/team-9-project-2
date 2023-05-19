const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, handlebars file is rendered
  //   res.sendFile(path.join(__dirname, '../views/index.html'));
  const books = "Harry Potter";
  res.render('all', { books });
});

module.exports = router;