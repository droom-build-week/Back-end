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

function findCompaniesForAdmin(admin_id) {
  return db('admins as a')
    .join('companies as c', 'c.admin_id', 'a.id')
    .where({ admin_id })
    .select(
      'a.id as admin_id',
      'a.full_name as admin_name',
      'a.position as admin_role',
      'a.email as admin_email',
      'c.id as company_id',
      'company_name',
      'industry')
}

module.exports = {
  findAll,
  add,
  findBy,
  findById,
  findCompaniesForAdmin
}
