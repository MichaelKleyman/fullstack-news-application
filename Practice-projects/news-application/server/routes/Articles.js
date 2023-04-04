const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Here are the articles');
});

module.exports = router;
