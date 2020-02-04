const Users = require("./users-model");

function getAllUsers(req, res) {
  Users.find()
    .then(users => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({
          message: "There was an error retrieving all users"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error retrieving all users"
      });
    });
}

module.exports = getAllUsers;
