const AdminsDb = require('../admins/admins-model');

async function validateAdminId(req, res, next) {
  const { id } = req.params;
  
  const admin = await AdminsDb.findById(id);

  if (admin) {
    req.user = admin;
    next();
  } else {
    res.status(400).json({ message: "Invalid Admin Id" })
  }
}

module.exports = validateAdminId;