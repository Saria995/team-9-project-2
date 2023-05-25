const router = require('express').Router();
const { Cart, Book } = require('../../models');

// The `/api/products` endpoint
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.render('cart', {
    
  });
});
// get one product
router.get('/:id', async (req, res) => {
});

// create new product
router.post('/', async (req, res) => {
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
