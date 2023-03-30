const router = require("express").Router();

// /register

router.get("/", (req, res) => {
  res.send("get all products");
});

// login

module.exports = router;
