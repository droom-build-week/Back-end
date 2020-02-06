const CompaniesDb = require('./companies-model');

function getCompany(req, res) {
  const { id } = req.company;

  CompaniesDb.findById(id)
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

module.exports = getCompany;