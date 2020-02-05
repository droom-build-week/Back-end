const router = require('express').Router();

const getAllCompanies = require('./getAllCompanies');
const getMatchesByCompanyId = require("../matches/getMatchesByCompanyId");
const validateAdminId = require("../middlewares/validateAdminId");

router.get('/', getAllCompanies);
router.get('/:id/matches', validateAdminId, getMatchesByCompanyId);

module.exports = router;