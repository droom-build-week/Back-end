const db = require("../data/db-config");

function find() {
  return db("users");
}

function findby(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

module.exports = {
  add,
  find,
  findby,
  findById
};
