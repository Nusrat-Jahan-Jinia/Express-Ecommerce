const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  articles: [
    {
      article_id: {
        type:String
      },
      quantity: {
        type: Number,
        default:1
      }
    }
  ],
  sales_amout: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required:true
  },
  sales_type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
     default: "pending"
  }
});

module.exports = mongoose.model("sale", salesSchema);
