const router = require("express").Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const companiesRouter = require('../companies/companies-router');
const restricted = require("../auth/restricted-middleware");

router.use('/api/auth', authRouter);
router.use('/api/users', restricted, usersRouter);
router.use('/api/companies', companiesRouter);

router.get("/", (req, res) => {
  res.send(`Welcome to Droom's API service! 😁`);
});

module.exports = router;
