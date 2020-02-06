const AdminsDb = require('./admins-model');

function getCompanies(req, res) {
  const { id } = req.user;

  AdminsDb.findCompaniesForAdmin(id)
    .then(companies => {
      res.status(200).json(companies)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack
      })
    })

}

module.exports = getCompanies;