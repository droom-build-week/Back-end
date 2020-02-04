const AdminDb = require('./admins-model');

function getAllAdmins(req, res) {
  AdminDb.findAll()
    .then(admins => {
      res.status(200).json(admins);
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: "An error occured while retrieving admins!",
      })
    });
}

module.exports = getAllAdmins;