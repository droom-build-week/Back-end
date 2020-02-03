const router = require('express').Router();

const getAllUsers = require('./getAllUsers');

router.get('/', getAllUsers);

module.exports = router;