const router = require('express').Router();

const getAllCompanies = require('./getAllCompanies');
const createAdmin = require('../admins/createAdmin');

router.get('/', getAllCompanies);
router.post('/register', createAdmin);

module.exports = router;