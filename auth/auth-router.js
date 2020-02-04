const router = require('express').Router();
const bcrypt = require('bcryptjs');

const AdminsDb = require('../admins/admins-model');
const validateAdmin = require('../middlewares/validateAdmin');


router.post('/register-admin', validateAdmin, (req, res) => {
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

module.exports = router;