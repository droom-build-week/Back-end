const router = require('express').Router();

const getAllAdmins = require('./getAllAdmins');
const getAdmin = require('./getAdmin');
const createCompany = require('../companies/createCompany');
const getCompanies = require('../admins/getCompanies');

const validateAdminId = require('../middlewares/validateAdminId');
const validateCompany = require('../middlewares/validateCompany');

router.get('/', getAllAdmins);
router.get('/:id', validateAdminId, getAdmin);
router.post('/:id/add-company', validateAdminId, validateCompany, createCompany);
router.get('/:id/companies', validateAdminId, getCompanies);

module.exports = router;