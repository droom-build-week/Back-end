function validateRegInfo(req, res, next) {
  const admin = req.body;

  if (Object.keys(admin).length === 0) {
    res.status(400).json({
      message: 'Invalid user credentials!',
    })
  } else if (
    admin.full_name === "" ||
    admin.position === "" ||
    admin.email === "" ||
    admin.password === "") {
    res.status(400).json({ message: 'Please fill all required fields to proceed!' })
  } else {
    next();
  }
}

function validateLoginInfo(req, res, next) {
  const admin = req.body;

  if (Object.keys(admin).length === 0) {
    res.status(400).json({
      message: 'Invalid user credentials!',
    })
  } else if (admin.email === "" || admin.password === "") {
    res.status(400).json({ message: 'Please enter your email and password to login!' })
  } else {
    next();
  }
}

module.exports = {
  validateRegInfo,
  validateLoginInfo
};