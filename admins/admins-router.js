const router = require("express").Router();

const getAllAdmins = require("./getAllAdmins");
const getAdmin = require("./getAdmin");
const createCompany = require("../companies/createCompany");
const createJobListing = require("../jobListings/createJobListing");
const deleteJobListing = require("../jobListings/deleteJobListing");
const updateJobListing = require("../jobListings/updateJobListing");
const validateAdminId = require("../middlewares/validateAdminId");
const validateCompany = require("../middlewares/validateCompany");
const validateJobListing = require("../middlewares/validateJobListing");

router.get("/", getAllAdmins);
router.get("/:id", validateAdminId, getAdmin);
router.post(
  "/:id/add-company",
  validateAdminId,
  validateCompany,
  createCompany
);
router.post(
  "/:id/add-joblisting",
  validateJobListing,
  validateAdminId,
  createJobListing
);

router.delete(
  "/:id/delete-joblisting/:jobListing_id",
  validateAdminId,
  deleteJobListing
);

router.put(
  "/:id/update-joblisting/:jobListing_id",
  validateAdminId,
  updateJobListing
);

module.exports = router;
