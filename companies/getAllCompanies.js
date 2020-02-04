const CompanyDb = require('./companies-model');

function getAllCompanies(req, res) {
  CompanyDb.getAll()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack,
      })
    });
}

module.exports = getAllCompanies;