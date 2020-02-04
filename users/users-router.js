const router = require("express").Router();

const getAllUsers = require("./getAllUsers");
const getUserById = require("./getUserById");

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;
