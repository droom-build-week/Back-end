const CompaniesDb = require("./companies-model");

function createCompany(req, res) {
  const company = req.body;
  const { id } = req.user;

  const newCompany = { ...company, admin_id: id };

  CompaniesDb.add(newCompany)
    .then(company => {
      res.status(201).json(company);
    })
    .catch(err => {
      res.status(400).json({
        errorMessage: "An error occured while adding a company!"
      });
    });
}

module.exports = createCompany;
