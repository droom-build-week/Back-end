const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require("../users/users-model");
const { validateRegInfoUser, validateLoginInfoUser } = require("../middlewares/validateUser");

const AdminsDb = require('../admins/admins-model');
const { validateRegInfo, validateLoginInfo } = require('../middlewares/validateAdmin');

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

function makeAdminToken(user) {
  const payload = {
    sub: user.id,
    full_name: user.full_name
  };

  const options = {
    expiresIn: '1d',
  }

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


router.post('/register-admin', validateRegInfo, (req, res) => {
  const admin = req.body;

  const passwordHash = bcrypt.hashSync(admin.password, 10);

  const newAdmin = { ...admin, password: passwordHash }

  AdminsDb.add(newAdmin)
    .then(savedAdmin => {
      res.status(201).json(savedAdmin);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Admin account couldn't be created!",
      })
    })
})

router.post('/login-admin', validateLoginInfo, (req, res) => {
  const { email, password } = req.body;

  AdminsDb.findBy({ email })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeAdminToken(user);
        res.status(200).json({
          message: `Welcome ${user.full_name}!`,
          token,
        })
      } else {
        res.status(500).json({
          message: "User not found!"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Login unsuccessful!",
      })
    })
})




module.exports = router;
