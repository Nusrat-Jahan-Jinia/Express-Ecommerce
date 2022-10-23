const express = require("express");
const router = express.Router();
const Price = require("../models/stock");
const { getAllPrices } = require("../controllers/stockController");

router.get("/", getAllPrices);

module.exports = router;
