const mongoose = require('mongoose');
let Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  productId: {
    type: ObjectId,
  },
  duration: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});


mongoose.model("User",userSchema)
