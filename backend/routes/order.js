const router = require("express").Router();

// /register

router.get("/", (req, res) => {
  res.send("get all orders");
});

// login

module.exports = router;
