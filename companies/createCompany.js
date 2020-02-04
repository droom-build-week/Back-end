const CompaniesDb = require('./companies-model');

function createCompany(req, res) {
  const company = req.body;
  const { id } = req.params;

  const newCompany = { ...company, admin_id: id }

  CompaniesDb.add(newCompany)
    .then(company => {
      res.status(201).json(company)
    })
    .catch(err => {
      res.status(400).json({
        errorMessage: err.message,
        stack: err.stack
      })
    });

}

module.exports = createCompany;