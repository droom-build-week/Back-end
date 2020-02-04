const db = require('../data/db-config');

function getAll() {
  return db('admins');
}

async function add(admin) {
  const [id] = await db('admins').insert(admin, 'id');

  return db('admins')
    .where({ id })
    .first()
    .select('id', 'full_name');
}

function findBy(filter) {
  return db('admins')
    .where(filter)
    .first();
}

module.exports = {
  getAll,
  add,
  findBy
}
