const AdminsDb = require('./admins-model');

function getACompany(req, res) {
  const companyId = req.company.id;
  const adminId = req.user.id;

  AdminsDb.findSingleCompanyAdmin(adminId, companyId)
    .then(company => {
      res.status(200).json(company)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack
      })
    })
}

// if(adminId !== req.company.admin_id) {

// } else if(companyId !== req.)

module.exports = getACompany;