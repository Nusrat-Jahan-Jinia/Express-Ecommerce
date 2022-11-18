const express = require("express");
const Article = require("../models/article");

async function getAllArticles(req, res) {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.send("Error" + err);
  }
}
async function postArticle(req, res) {
    const article = new Article({
      name: req.body.name,
      description: req.body.description,
      tag: req.body.tag,
      user_role: req.body.user_role
      });
      try {
        const p1 = await article.save();
        res.send(p1);
      } catch (err) {
        res.send("Error" + err);
      }
  }

  async function getSingleArticle(req, res){
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
      } catch (err) {
        res.send("No article by this id " + err);
      }
  }

  async function updateSingleArticle(req, res){
    try {
        const article = await Article.findById(req.params.id);
        article.name = req.body.name
        article.description = req.body.description
        article.tag = req.body.tag
        const p1 = await article.save();
        res.send(p1)
      } catch (err) {
        res.send("Error" + err);
      }
  }
  async function deleteSingleArticle(req, res){
    try {
        const article = await Article.findById(req.params.id);
        const p1 = await article.delete();
        res.send("deleted");
      } catch (err) {
        res.send("Error" + err);
      }
  }

module.exports = {
    getAllArticles,
    postArticle,
    getSingleArticle,
    updateSingleArticle,
    deleteSingleArticle
};
