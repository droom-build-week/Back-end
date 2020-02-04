const router = require('express').Router();

const getAllCompanies = require('./getAllCompanies');

router.get('/', getAllCompanies);

module.exports = router;