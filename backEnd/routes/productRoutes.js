const Product = require("../models/product");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "showing all products !",
  });
});

router.post("/", async (req, res) => {
  const produ = req.body;
  console.log("produ", produ);
  const product = await Product.create(req.body);
  //   const savedP = await product.save();
  console.log("product", product);
  res.json({
    message: "added a product !",
    product,
  });
});

module.exports = router;
