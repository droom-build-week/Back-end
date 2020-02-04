const AdminDb = require('./admins-model');

function getAdmin(req, res) {
  const { id } = req.params;

  AdminDb.findById(id)
    .then(admin => {
      res.status(200).json(admin);
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: err.message,
        stack: err.stack,
      })
    });
}

module.exports = getAdmin;