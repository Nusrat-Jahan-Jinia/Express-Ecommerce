const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const {
  getAllInCart,
  create_cart
} = require("../controllers/cartController");

router.get("/", getAllInCart);
router.post("/", create_cart);


module.exports = router;
