const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  receipt_number: {
    type: Number,
    required: true,
  },
  receipt_customer_id: {
    type: Number,
    required: true,
  },
  receipt_type: {
    type: String,
    required: true,
  },
  receipt_description: {
    type: String,
    required: true,
  },
  receipt_customer_id: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("receipt", receiptSchema);
