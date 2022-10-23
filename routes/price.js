const express = require("express");
const router = express.Router();
const Price = require("../models/price");
const { getAllPrices } = require("../controllers/priceController");

router.get("/", getAllPrices);

module.exports = router;
