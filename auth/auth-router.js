const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AdminsDb = require('../admins/admins-model');
const { validateRegInfo, validateLoginInfo} = require('../middlewares/validateAdmin');

function makeAdminToken(user) {
  const payload = {
    sub: user.id,
    full_name: user.full_name
  };

  const options = {
    expiresIn:'1d',
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);

  return token;
}


router.post('/register-admin', validateRegInfo, (req, res) => {
  const { full_name, email, position, password } = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);

  const admin = {
    full_name,
    email,
    position,
    password: passwordHash
  }

  AdminsDb.add(admin)
    .then(savedAdmin => {
      res.status(201).json(savedAdmin);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Admin account couldn't be created!",
        stack: err.stack,
      })
    })
})

router.post('/login-admin', validateLoginInfo, (req, res) => {
  const { email, password } = req.body;

  AdminsDb.findBy(email)
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
        errorMessage: err.message,
        stack: err.stack,
      })
    })
})

module.exports = router;