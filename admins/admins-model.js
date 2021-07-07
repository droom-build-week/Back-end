const db = require('../data/db-config');

function findAll() {
  return db('admins');
}

async function add(admin) {
  const [id] = await db('admins').insert(admin, 'id');

  return db('admins as a')
    .where({ id })
    .first()
    .select(
      'a.id',
      'a.full_name',
      'a.position',
      'a.email'
    );
}

function findBy(filter) {
  return db('admins')
    .where(filter)
    .first();
}

function findById(id) {
  return db('admins as a')
    .where({ id })
    .first()
    .select('a.id', 'full_name', 'position', 'a.email');
}

function findCompaniesForAdmin(admin_id) {
  return db('admins as a')
    .join('companies as c', 'c.admin_id', 'a.id')
    .where({ admin_id })
    .select(
      'c.id as company_id',
      'company_name',
      'industry',
      'c.created_at',
      'c.updated_at')
}

function findSingleCompanyAdmin(admin_id, id) {

  return db('admins as a')
    .join('companies as c', 'a.id', 'c.admin_id')
    .where({ 'c.admin_id': admin_id, 'c.id': id })
    .select(
      'c.id as company_id',
      'company_name',
      'industry',
      'a.full_name as admin_name',
      'c.created_at',
      'c.updated_at'
    )
    .first();
}

module.exports = {
  findAll,
  add,
  findBy,
  findById,
  findCompaniesForAdmin,
  findSingleCompanyAdmin,
}
