const db = require('../data/db-config');

function getAll() {
  return db('companies');
}

async function add(company) {
  const [id] = await db('companies').insert(company, 'id');
  
  return db('companies')
    .where({ id })
    .first();
}

function findById(id){
  return db('companies')
    .where({ id })
    .first();
}

function updateCompany(changes, id) {
  return db('companies')
    .update(changes)
    .where({ id });
}

function removeCompany(id) {
  return db('companies')
    .where({ id })
    .del();
}

module.exports = {
  getAll,
  add,
  findById,
  updateCompany,
  removeCompany
}