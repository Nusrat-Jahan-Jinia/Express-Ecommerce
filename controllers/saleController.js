const express = require("express");
const Sale = require("../models/sale");

async function getAllSales(req, res) {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.send("Error" + err);
  }
}




module.exports = {
    getAllSales,
};
