const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  sales_customer_id: {
    type: Number,
    required: true,
  },
  sales_amout: {
    type: Number,
    required: true,
  },
  sales_type: {
    type: String,
    required: true,
  },
  sales_description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("sale", salesSchema);
