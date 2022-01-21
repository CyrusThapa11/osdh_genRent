const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchem = new Schema({
  name: {
    type: String,
  },
  rentedtype: {
    type: String,
  },
  categories: {
    type: Array,
  },
  images: {
    type: Array,
  },
  // owner: {
  //   type: Schema.Types.ObjectId,
  // },
  cost: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchem);

module.exports = Product;
