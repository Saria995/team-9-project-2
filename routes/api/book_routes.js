const router = require('express').Router();
const { Book } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
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



