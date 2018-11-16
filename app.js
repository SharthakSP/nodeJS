var express = require("express");
var route = require("./route/route");
var parser = require("body-parser");

//including mongoose
var mongoose = require("mongoose");
//opening a connection to profile
mongoose.connect("mongodb://127.0.0.1:27017/profile")

//checking connection
var db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));

var app = express();

app.use(parser.json());
app.use(route);
app.listen(8080,"127.0.0.1", ()=> {
    console.log("Server running")
});
