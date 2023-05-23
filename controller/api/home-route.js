const router = require('express').Router();

// route to get all dishes
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

module.exports = router;
