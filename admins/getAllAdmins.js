const AdminDb = require('./admins-model');

const getAllAdmins = (req, res) => {
  AdminDb.findAll()
    .then(admins => {
      res.status(200).json(admins)
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: "Could not get a list of admins! If problem persists... Ask Google"
      })
    })
}

module.exports = getAllAdmins;