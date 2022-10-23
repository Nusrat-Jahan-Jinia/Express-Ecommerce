const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const articleRoute = require("./routes/article");

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

app.use(express.json());
app.use("/articles", articleRoute);

app.listen(9000, function (req, res) {
  console.log("Server running");
});
