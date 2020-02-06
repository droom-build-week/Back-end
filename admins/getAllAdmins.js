const AdminDb = require('./admins-model');

const getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminDb.findAll();
    const adminsWithCompanies = await admins.map(async (admin) => {
      admin.companies = await AdminDb.findCompaniesForAdmin(admin.id);
      return admin
    })
    const newAdmins = Promise.all(adminsWithCompanies)
    console.log(newAdmins)
    res.json(newAdmins)
  } catch (err) {
    console.log(err);
  }
}

// const admin = req.user;

// const companies = await AdminsDb.findCompaniesForAdmin(admin.id)

// admin["companies"] = companies;

// Map through admin list
// For each latch companies to them.


// expected output:
/*
[
  {
    "id": 2,
    "full_name": "Matt Locklin",
    "position": "SL",
    "email": "Matt.Locklin@test.com",
    "companies": []
  },
  {
    "id": 1,
    "full_name": "Remi Becheru",
    "position": "TL",
    "email": "Remi.Becheru@test.com",
    "companies": []
  }
]
 */


module.exports = getAllAdmins;