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

  const data = JSON.parse(req.body);

  console.log(data.userId);
  
    const cart = new Cart({
    
      userId: data.userId,
      // articles: [
      //   {
      //     articleId:data.articleId ,
      //     quantity:data.quantity
      //   }
      // ]
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
