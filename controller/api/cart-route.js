const router = require('express').Router();
const { Cart, Book } = require('../../models');

// The `/api/products` endpoint

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
