const express = require("express");
const router = express.Router();
const Price = require("../models/sale");
const { getAllSales } = require("../controllers/saleController");

router.get("/", getAllSales);

module.exports = router;
