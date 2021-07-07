function validateCompany(req, res, next) {
  const company = req.body;

  if (Object.keys(company).length === 0) {
    res.status(400).json({
      message: "No content to post!"
    });
  } else if (company.company_name === "" || company.industry === "") {
    res
      .status(400)
      .json({ message: "Please enter company name and industry!" });
  } else {
    next();
  }
}

module.exports = validateCompany;
