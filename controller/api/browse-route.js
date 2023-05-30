const router = require('express').Router();
const {Book,Genre} = require('../../models');

// // browse page

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll();

    const book = bookData.map((library) =>{
      return library.get({ plain: true }) 
    });

    res.render('browse', {
      book: book,
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;