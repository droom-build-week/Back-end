const db = require("../data/db-config");

function findAll() {
  return db("matches as m")
    .join("users as u", "u.id", "m.applicant_id")
    .join("companies as c", "c.id", "m.company_id")
    .join("jobListings as jl", "jl.id", "m.job_id")
    .select(
      "u.full_name as name",
      "u.email as email",
      "c.company_name as companyName",
      "jl.title as title"
    );
}

function findById(id) {
  return db("matches as m")
    .join("users as u", "u.id", "m.applicant_id")
    .join("companies as c", "c.id", "m.company_id")
    .join("jobListings as jl", "jl.id", "m.job_id")
    .where({ applicant_id: `${id}` })
    .select(
      "u.full_name as name",
      "u.email as email",
      "c.company_name as companyName",
      "jl.title as title"
    );
}

module.exports = {
  findAll,
  findById
};
