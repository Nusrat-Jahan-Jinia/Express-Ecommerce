const express = require("express");
const Price = require("../models/price");

async function getAllPrices(req, res) {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (err) {
    res.send("Error" + err);
  }
}
// async function postArticle(req, res) {
//     const article = new Article({
//         name: req.body.name,
//         tag: req.body.tag,
//       });
//       try {
//         const p1 = await article.save();
//         res.send(p1);
//       } catch (err) {
//         res.send("Error" + err);
//       }
//   }





module.exports = {
    getAllPrices,
};
