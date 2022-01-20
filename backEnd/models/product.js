const mongoose = require("mongoose");

const Product = mongoose.model({
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

module.exports = Product;
