const express = require("express");

const app = express();
app.get('/', (req, res)=>{
    res.send('Hello world');
})







app.listen(9000, function (req, res) {
  console.log("Server running");
});