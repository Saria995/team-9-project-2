const router = require('express').Router();
const { Cart, Book,Purchase } = require('../../models');
const withAuth = require('../../middleware/auth');
// The `/api/products` endpoint
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.render('cart', {
      loggedIn: req.session?.loggedIn, 
      user: req.session?.user
  });
});
// get one product
router.get('/:id', async (req, res) => {
});

// create new product
router.post('/', withAuth, async (req, res) => {
  try {
    const newPurchase = await Purchase.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPurchase);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
