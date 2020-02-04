const router = require("express").Router();

const getAllUsers = require("./getAllUsers");
const getUserById = require("./getUserById");

const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, getAllUsers);

router.get("/:id", restricted, getUserById);

module.exports = router;
