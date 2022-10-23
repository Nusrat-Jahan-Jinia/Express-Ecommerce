const express = require("express");
const router = express.Router();
const Price = require("../models/receipt");
const { getAllPrices } = require("../controllers/receiptController");

router.get("/", getAllPrices);

module.exports = router;
