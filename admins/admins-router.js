const router = require('express').Router();

const getAllAdmins = require('./getAllAdmins');
const getAdmin = require('./getAdmin');
const createCompany = require('../companies/createCompany');
const validateCompany = require('../middlewares/validateCompany');
// const CompaniesDb = require('../companies/companies-model');

router.get('/', getAllAdmins);
router.get('/:id', getAdmin);
router.post('/:id/add-company', validateCompany, createCompany);

module.exports = router;