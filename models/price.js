const mongoose = require("mongoose");
const article = require("./article");

const priceSchema = new mongoose.Schema({
  regular_price: {
    type: Number,
    required: true,
  },
  discount_price: {
    type: Number,
    required: true,
  },
  article_id: {
  type: String,
  required: true,
  }
});

module.exports = mongoose.model("price", priceSchema);
