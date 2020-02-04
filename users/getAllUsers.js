const UsersDb = require('./users-model');

function getAllUsers(req, res) {
  UsersDb.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(404).json({
        message: err.message,
        stack: err.stack
      })
    });
}

module.exports = getAllUsers;