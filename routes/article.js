const express = require("express");
const router = express.Router();
const Article = require("../models/article");

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.send("Error" + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.send("No article by this id " + err);
  }
});

router.post("/", async (req, res) => {
  const article = new Article({
    name: req.body.name,
    tag: req.body.tag,
  });
  try {
    const p1 = await article.save();
    res.send(p1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.name = req.body.name
    const p1 = await article.save();
    res.send(p1)
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    const article = await Article.findById(req.params.id);
    const p1 = await article.delete();
    res.send("deleted");
  } catch (err) {
    res.send("Error" + err);
  }
})
module.exports = router;
