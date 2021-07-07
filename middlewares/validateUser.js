function validateRegInfoUser(req, res, next) {
  const user = req.body;

  if (Object.keys(user).length === 0) {
    res.status(400).json({
      message: "Invalid user credentials!"
    });
  } else if (
    user.full_name === "" ||
    user.username === "" ||
    user.email === "" ||
    user.occupation === "" ||
    user.password === ""
  ) {
    res
      .status(400)
      .json({ message: "Please fill all required fields to proceed!" });
  } else {
    next();
  }
}

function validateLoginInfoUser(req, res, next) {
  const user = req.body;

  if (Object.keys(user).length === 0) {
    res.status(400).json({
      message: "Invalid user credentials!"
    });
  } else if (user.username === "" || user.password === "") {
    res
      .status(400)
      .json({ message: "Please enter your username and password to login!" });
  } else {
    next();
  }
}

module.exports = {
  validateRegInfoUser,
  validateLoginInfoUser
};
