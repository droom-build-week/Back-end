const router = require('express').Router();

const usersRouter = require('../users/users-router');
const companiesRouter = require('../companies/companies-router');

router.use('/api/users', usersRouter);
router.use('/api/companies', companiesRouter);

router.get('/', (req, res) => {
  res.send(`Welcome to Droom's API service! 😁`)
})

module.exports = router;