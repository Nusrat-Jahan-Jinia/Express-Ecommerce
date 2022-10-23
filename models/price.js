const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  regular_price: {
    type: Number,
    required: true,
  },
  discount_price: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("price", priceSchema);
