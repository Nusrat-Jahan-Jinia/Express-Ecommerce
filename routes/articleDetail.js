const express = require("express");
const router = express.Router();
const Price = require("../models/articleDetail");
const { getAllPrices } = require("../controllers/articleDetailController");

router.get("/", getAllPrices);

module.exports = router;
