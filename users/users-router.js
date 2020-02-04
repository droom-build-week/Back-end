const router = require("express").Router();

const getAllUsers = require("./getAllUsers");

const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, getAllUsers);

module.exports = router;
