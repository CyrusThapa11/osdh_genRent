const mongoose = require("mongoose");

const productSchem = new mongoose.model({
  name: {
    type: String,
    required: true,
  },
  rentedtype: {
    type: String,
    unique: true,
  },
  categories: {
    type: Array,
  },
  images: {
    type: Array,
  },
  owner: {
    type: String,
  },
  cost: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchem);

module.exports = Product;
