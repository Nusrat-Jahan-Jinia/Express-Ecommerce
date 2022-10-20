const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// database connection
dotenv.config();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/alien", (req, res) => {
  const id = req.query.id;
  res.send("Welcome back to alien" + id);
});

app.get("/alien/:id", (req, res) => {
  const id = req.params.id;
  res.send("hey jinia " + id);
});

app.listen(9000, function (req, res) {
  console.log("Server running");
});
