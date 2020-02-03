const router = require('express').Router();

const usersRouter = require('../users/users-router');

router.use('/api/users', usersRouter);

router.get('/', (req, res) => {
  res.send(`Welcome to Droom's API service! 😁`)
})

module.exports = router;