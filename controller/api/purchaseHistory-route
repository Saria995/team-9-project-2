const router = require('express').Router();
const {Purchase, user} = require('../../models');

// // browse page

router.get('/', async (req, res) => {
    try {
      const purchaseInfo = await Purchase.findAll({
        user: req.session?.user,
        where: {
          user_id: req.session?.user.id
        },
      });
      
      
      
      const purchased = purchaseInfo.map((library) =>
        library.get({ plain: true }), 
      );
      console.log(purchased);
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('purchased', {
        purchased,
        loggedIn: req.session?.loggedIn, 
        user: req.session?.user
      });
      console.log(req.session?.user.id);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const purchaseData = await Purchase.create(req.body);
      res.status(200).json(purchaseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;