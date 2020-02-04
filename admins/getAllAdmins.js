const AdminDb = require('./admins-model');

function getAllAdmins(req, res) {
  AdminDb.getAll()
    .then(admins => {
      res.status(200).json(admins);
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack,
      })
    });
}

module.exports = getAllAdmins;