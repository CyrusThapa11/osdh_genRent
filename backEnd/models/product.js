const mongoose ,{Schema} = require("mongoose");

const productSchem = new Schema({
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

const Product = mongoose.model("Product", productSchem);

module.exports = Product;
