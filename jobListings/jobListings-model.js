const db = require("../data/db-config");

function findAll() {
  return db("jobListings");
}

function findById(id) {
  return db("jobListings")
    .where({ id })
    .first();
}

async function add(jobListing) {
  const [id] = await db("jobListings").insert(jobListing, "id");
  return db("jobListings")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("jobListings")
    .update(changes)
    .where({ id });
}

function remove(jobListing_id) {
  return db("jobListings")
    .where("id", jobListing_id)
    .del();
}

module.exports = {
  findAll,
  findById,
  add,
  update,
  remove
};
