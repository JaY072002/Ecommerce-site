const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("get all user ");
});

module.exports = router;
