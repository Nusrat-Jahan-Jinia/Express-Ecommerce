const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const {
  getAllArticles,
  postArticle,
  getSingleArticle,
  updateSingleArticle,
  deleteSingleArticle,
} = require("../controllers/articleController");

router.get("/", getAllArticles);
router.post("/", postArticle);
router.get("/:id", getSingleArticle);
router.get("/:id", updateSingleArticle);
router.delete("/:id", deleteSingleArticle);

module.exports = router;
