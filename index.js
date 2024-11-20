var express = require("express");
var mongoose = require("mongoose");
var db = require("./Database/db1.js");
db();

const Schema = mongoose.Schema;
const productsschema = new Schema({
  name: String,
  price: Number,
  discount: Number,
});

const productModel = mongoose.model("products", productsschema);

var app = express();
app.use(express.json());
app.get("/product", async function (req, res) {
  try {
    var result = await productModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/product",async function (req, res) {
    try {
        var record = new productModel(req.body);
        var ans = await record.save();
        res.send("record sumbmited");
     } catch (error) {
        res.send(error.message);
    }
});

app.listen(4001);