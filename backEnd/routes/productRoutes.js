const Product = require("../models/product");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const allProducts = await Product.find();
  console.log("allProducts", allProducts);

  // res.status(200).json({
  //   message: "showing all products !",
  //   allProducts,
  // });

  res.render("products/index", { allProducts });
});

router.post("/", async (req, res) => {
  const produ = req.body;
  console.log("produ", produ);
  const product = await Product.create(req.body);
  //   const savedP = await product.save();
  console.log("product", product);
  res.status(200).json({
    message: "added a product !",
    product,
  });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id is", id);
  const produ = req.body;
  console.log("produ", produ);
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  //   const savedP = await product.save();
  console.log("product", product);
  res.status(200).json({
    message: "updated a product !",
    product,
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id is", id);
  const produ = req.body;
  console.log("produ", produ);
  const product = await Product.findByIdAndDelete(id);
  //   const savedP = await product.save();
  console.log("product", product);

  res.status(200).json({
    message: "deleted a product !",
  });
});

module.exports = router;
