const CompaniesDb = require('./companies-model');

function getCompany(req, res) {
  const { id } = req.company;

  CompaniesDb.findById(id)
    .then(company => {
      res.status(200).json(company)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: "Unexpected error occurred while getting this company! Try again... If problem persists ask Google"
      })
    })
}

module.exports = getCompany;