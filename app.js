var express = require("express");
var route = require("./route/route");
var parser = require("body-parser");
var app = express();

app.use(parser.json());
app.use(route);
app.listen(8080);
