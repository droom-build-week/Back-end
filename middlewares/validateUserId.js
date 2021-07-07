const Users = require("../users/users-model");

async function validateUserId(req, res, next) {
  const { id } = req.params;

  const user = await Users.findById(id);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(400).json({ message: "Invalid user Id" });
  }
}

module.exports = validateUserId;
