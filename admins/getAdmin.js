const AdminsDb = require('./admins-model');

async function getAdmin(req, res) {
  const admin = req.user;

  const companies = await AdminsDb.findCompaniesForAdmin(admin.id)

  admin["companies"] = companies;

  res.status(200).json(admin);
}

module.exports = getAdmin;