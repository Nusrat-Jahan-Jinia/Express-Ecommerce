const express = require("express");
const Stock = require("../models/stock");

async function getAllPrices(req, res) {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.send("Error" + err);
  }
}




module.exports = {
    getAllPrices,
};
