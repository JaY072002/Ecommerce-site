const router = require("express").Router();

// /register

router.get("/", (req, res) => {
  res.send("get all carts");
});

// login

module.exports = router;
