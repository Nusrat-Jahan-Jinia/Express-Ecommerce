const express = require("express");
const cart = require("../models/cart");
const Cart = require("../models/cart");

async function getAllInCart(req, res) {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.send("Error" + err);
  }
}

async function create_cart(req, res) {

  const resData = JSON.parse(res.body);
  
  console.log(resData.userId);


  throw console.error("error going");
    const cart = new Cart({
    
      
      });
      try {
        const p1 = await cart.save();
        res.send(p1);
      } catch (err) {
        res.send("Error" + err);
      }
  }



module.exports = {
  getAllInCart,
  create_cart
};
