const mongoose = require("mongoose");

const Renter = mongoose.model({
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

module.exports = Renter;
