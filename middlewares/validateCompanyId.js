const CompaniesDb = require('../companies/companies-model');

async function validateCompanyId(req, res, next) {
  const { companyId } = req.params;

  const company = await CompaniesDb.findById(companyId);

  if (company) {
    req.company = company;
    next();
  } else {
    res.status(400).json({ message: "Company does not exist!" })
  }
}

module.exports = validateCompanyId;