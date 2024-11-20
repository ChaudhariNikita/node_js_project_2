var mongoose = require("mongoose");

async function dbconnection() {
    var connection = await mongoose.connect('mongodb://127.0.0.1:27017/productdetails');
    return connection;
}

module.exports = dbconnection;