const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`Welcome to Droom's API service! 😁`)
})

module.exports = router;