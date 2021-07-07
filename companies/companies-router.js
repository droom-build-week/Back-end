const router = require('express').Router();

const getAllCompanies = require('./getAllCompanies');
const getCompany = require('./getCompany');

const validateCompanyId = require('../middlewares/validateCompanyId');

router.get('/', getAllCompanies);
router.get('/:id', validateCompanyId, getCompany);

module.exports = router;