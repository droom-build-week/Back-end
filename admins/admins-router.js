const router = require('express').Router();

const getAllAdmins = require('./getAllAdmins');

router.get('/', getAllAdmins);

module.exports = router;