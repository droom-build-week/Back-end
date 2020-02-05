const router = require("express").Router();

const getAllUsers = require("./getAllUsers");
const getUserById = require("./getUserById");
const getAllJobListings = require("../jobListings/getAllJobListings");
const getJobListingById = require("../jobListings/getJobListingById");
const getMatchesByUserId = require("../matches/getMatchesByUsersId");
const getAllMatches = require("../matches/getAllMatches");
const validateUserId = require("../middlewares/validateUserId");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id/joblistings", validateUserId, getAllJobListings);
router.get("/:id/joblistings/:id", validateUserId, getJobListingById);
router.get("/:id/allmatches", validateUserId, getAllMatches)
router.get("/:id/matches", validateUserId, getMatchesByUserId);

module.exports = router;
