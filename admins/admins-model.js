const db = require('../data/db-config');

function findAll() {
  return db('admins');
}

async function add(admin) {
  const [id] = await db('admins').insert(admin, 'id');

  return db('admins')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('admins')
    .where(filter)
    .first();
}

function findById(id) {
  return db('admins')
    .where({ id })
    .first();
}


module.exports = {
  findAll,
  add,
  findBy,
  findById
}
