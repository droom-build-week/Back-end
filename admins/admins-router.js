const router = require('express').Router();

const getAllAdmins = require('./getAllAdmins');
const getAdmin = require('./getAdmin');
const createCompany = require('../companies/createCompany');
const getCompanies = require('../admins/getCompanies');
const getACompany = require('../admins/getACompany')

const validateAdminId = require('../middlewares/validateAdminId');
const validateCompany = require('../middlewares/validateCompany');
const validateCompanyId = require('../middlewares/validateCompanyId')

router.get('/', getAllAdmins);
router.get('/:id', validateAdminId, getAdmin);
router.post('/:id/add-company', validateAdminId, validateCompany, createCompany);
router.get('/:id/companies', validateAdminId, getCompanies);
router.get('/:id/companies/:companyId', validateCompanyId, validateAdminId, getACompany);


module.exports = router;