const express = require("express");
const Cart = require("../models/cart");

async function getAllInCart(req, res) {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.send("Error" + err);
  }
}






module.exports = {
    getAllInCart
};
