const express = require("express");
const Price = require("../models/stock");

async function getAllPrices(req, res) {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (err) {
    res.send("Error" + err);
  }
}




module.exports = {
    getAllPrices,
};
