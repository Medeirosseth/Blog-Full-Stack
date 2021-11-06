const router = required("express").Router();
const User = require("../Models/User")

//Register
router.post("/register",  async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    const user = await newUser.save();
  } catch (err) {
    res.status(500).jason(err)
  }
})