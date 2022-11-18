const express = require("express");
const User = require("../models/user");

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error" + err);
  }
}
async function postUser(req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        role: req.body.role,
      });
      try {
        const p1 = await user.save();
        res.send(p1);
      } catch (err) {
        res.send("Error" + err);
      }
  }

  async function getSingleUser(req, res){
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
      } catch (err) {
        res.send("No article by this id " + err);
      }
  }

  async function updateSingleUser(req, res){
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name
        const p1 = await user.save();
        res.send(p1)
      } catch (err) {
        res.send("Error" + err);
      }
  }
  async function deleteSingleUser(req, res){
    try {
        const user = await User.findById(req.params.id);
        const p1 = await user.delete();
        res.send("deleted");
      } catch (err) {
        res.send("Error" + err);
      }
  }

module.exports = {
    getAllUsers,
    postUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser
};
