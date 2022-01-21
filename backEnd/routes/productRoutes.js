const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "showing all products !",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "showing all products !",
  });
});

module.exports = router;
