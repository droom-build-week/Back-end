const router = require("express").Router();

// GET helpers
const getAllAdmins = require("./getAllAdmins");
const getAdmin = require("./getAdmin");
const getCompanies = require('../admins/getCompanies');
const getACompany = require('../admins/getACompany')

// POST helpers
const createCompany = require("../companies/createCompany");
const createJobListing = require("../jobListings/createJobListing");

// Validation helpers
const validateAdminId = require("../middlewares/validateAdminId");
const validateCompany = require("../middlewares/validateCompany");
const validateJobListing = require("../middlewares/validateJobListing");
const validateCompanyId = require('../middlewares/validateCompanyId')

// PUT helpers
const updateJobListing = require("../jobListings/updateJobListing");
const editCompany = require("../companies/editCompany");

// DELETE helpers
const deleteJobListing = require("../jobListings/deleteJobListing");


// Admins
router.get("/", getAllAdmins);
router.get("/:id", validateAdminId, getAdmin);

// Admins => Companies
router.post("/:id/add-company", validateAdminId, validateCompany, createCompany);
router.get("/:id/companies", validateAdminId, getCompanies);
router.get("/:id/companies/:companyId", validateCompanyId, validateAdminId, getACompany);
router.put("/:id/companies/:companyId/edit", validateCompanyId, validateAdminId, validateCompany, editCompany);

// Edit Company
// Delete Company

// Admins => Companies => Listings
router.post("/:id/add-joblisting", validateJobListing, validateAdminId, createJobListing);
router.delete("/:id/delete-joblisting/:jobListing_id", validateAdminId, deleteJobListing);
router.put("/:id/update-joblisting/:jobListing_id", validateAdminId, updateJobListing);

module.exports = router;
