const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const articleRoute = require("./routes/article");
const priceRoute = require("./routes/price");
const saleRoute = require("./routes/sale");
const stockRoute = require("./routes/stock");
const articleRouteRoute = require("./routes/articleDetail");
const receiptRoute = require("./routes/receipt");
const userRoute = require('./routes/user')

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
app.use("/prices", priceRoute);
app.use("/sales", saleRoute);
app.use("/stocks", stockRoute);
app.use("/articleDetails", articleRouteRoute);
app.use("/receipts", receiptRoute);
app.use("/users", userRoute);

app.listen(9000, function (req, res) {
  console.log("Server running");
});
