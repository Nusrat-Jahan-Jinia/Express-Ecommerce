const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const {
  getAllInCart
} = require("../controllers/cartController");

router.get("/", getAllInCart);


module.exports = router;
