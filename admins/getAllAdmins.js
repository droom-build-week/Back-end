const AdminDb = require('./admins-model');

const getAllAdmins = async (req, res) => {
  AdminDb.findAll()
    .then(admin => {
      res.status(200).json(admin)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack
      })
    })
}

module.exports = getAllAdmins;