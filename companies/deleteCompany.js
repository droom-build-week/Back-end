const CompaniesDb = require('./companies-model');

function deleteCompany(req, res) {
  const companyId = req.company.id;

  CompaniesDb.removeCompany(companyId)
    .then(() => {
      res.status(202).json({
        message: "Company removed!"
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Company could not be edited!",
        stack: err.stack
      })
    })
}

module.exports = deleteCompany;