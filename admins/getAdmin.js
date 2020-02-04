function getAdmin(req, res) {
  const admin = req.user;
  res.status(200).json(admin);
}

module.exports = getAdmin;