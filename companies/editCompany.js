const CompaniesDb = require('./companies-model');

function editCompany(req, res) {
  const companyId = req.company.id;
  const updated = req.body;

  CompaniesDb.updateCompany(updated, companyId)
    .then(() => {
      res.status(202).json({
        message: "Company edited successfully!"
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Company could not be edited!"
      })
    })
}

module.exports = editCompany;