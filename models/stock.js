const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  stock_items: {
    type: String,
    required: true,
  },
  stock_number: {
    type: Number,
    required: true,
  },
  stock_type: {
    type: String,
    required: true,
  },
  stock_description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("stock", stockSchema);
