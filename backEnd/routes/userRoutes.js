const router = require("express").Router();

router.get("/", (req, res) =>
  res.json({
    message: "showing all products !",
  })
);

router.get("/new", (req, res) => res.render("users/userForm"));

module.exports = router;
