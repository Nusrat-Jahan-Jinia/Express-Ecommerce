const express = require("express");
const router = express.Router();
const User = require("../models/user")
const { getAllUsers, postUser, getSingleUser, updateSingleUser, deleteSingleUser } = require("../controllers/userController");


router.get("/", getAllUsers);
router.post("/", postUser);
router.get("/:id", getSingleUser);
router.get("/:id", updateSingleUser);
router.delete("/:id", deleteSingleUser);

module.exports = router;