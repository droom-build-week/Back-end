const Users = require("./users-model");

function getUserById(req, res) {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "Couldn't find user with this id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving this user"
      });
    });
}

module.exports = getUserById;
