const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, handlebars file is rendered
//   res.sendFile(path.join(__dirname, '../views/index.html'));
const books = "Harry Potter";
res.render('all', { books });
});

module.exports = router;