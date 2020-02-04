const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");
const {
  validateRegInfoUser,
  validateLoginInfoUser
} = require("../middlewares/validateUser");

function makeUserToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

router.post("/register", validateRegInfoUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error registrating this new user"
      });
    });
});

router.post("/login", validateLoginInfoUser, (req, res) => {
  let { username, password } = req.body;

  Users.findby({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const Token = makeUserToken(user);
        res.status(200).json({
          message: `Hello ${user.username}`,
          Token
        });
      } else {
        res.status(401).json({
          message: "Wrong credentials"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error logging in"
      });
    });
});

module.exports = router;
