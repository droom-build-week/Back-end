const router = require("express").Router();

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

router.use("/api/users", usersRouter);
router.use("/api/auth", authRouter);

router.get("/", (req, res) => {
  res.send(`Welcome to Droom's API service! 😁`);
});

module.exports = router;
