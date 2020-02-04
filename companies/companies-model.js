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

module.exports = {
  getAll,
  add
}