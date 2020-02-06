const AdminsDb = require('./admins-model');

function getACompany(req, res) {
  const companyId = req.company.id;
  const adminId = req.user.id;

  AdminsDb.findSingleCompanyAdmin(adminId, companyId)
    .then(company => {
      if (!company) {
        res.status(403).json({
          message: "You don't have access to this company!"
        })
      }
      res.status(200).json(company)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack
      })
    })
}

module.exports = getACompany;