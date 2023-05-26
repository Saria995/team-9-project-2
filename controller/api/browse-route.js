const router = require('express').Router();
const {Book,Genre} = require('../../models');

// // browse page

router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll({
        include: [
          {
            model: Genre,
            attributes: ['name'],
          },
        ],
      });
      
      console.log(bookData);
      
      const bookInfo = bookData.map((library) =>
        library.get({ plain: true }), 
      );
      
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('browse', {
        bookInfo,
        loggedIn: req.session?.loggedIn, 
        user: req.session?.user
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;