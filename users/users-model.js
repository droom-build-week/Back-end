const db = require('../data/db-config');

function findAllUsers() {
  return db('users');
}

module.exports = {
  findAllUsers
}