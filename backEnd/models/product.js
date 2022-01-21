const mongoose = require('mongoose');
let Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const productSchema = new Schema({
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
  // owner: {
  //   type: Schema.Types.ObjectId,
  // },
  cost: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
