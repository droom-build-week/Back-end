const AdminDb = require('./admins-model');

const getAllAdmins = (req, res) => {
  AdminDb.findAll()
    .then(admins => {
      res.status(200).json(admins)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack
      })
    })
}

module.exports = getAllAdmins;