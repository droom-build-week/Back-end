const router = require("express").Router();

const getAllUsers = require("./getAllUsers");
const getUserById = require("./getUserById");
const getAllJobListings = require("../jobListings/getAllJobListings");
const getJobListingById = require("../jobListings/getJobListingById");
const getMatchesById = require("../matches/getMatchesById");
const getAllMatches = require("../matches/getAllMatches");
const validateUserId = require("../middlewares/validateUserId");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id/joblistings", validateUserId, getAllJobListings);
router.get("/:id/joblistings/:id", getJobListingById, validateUserId);
router.get("/:id/matches", validateUserId, getMatchesById);

module.exports = router;
