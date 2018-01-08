// Require the following npm packages inside of the server.js file:

// express
var express = require("express");
// method-override
var methodOverride = require("method-override");
// body-parser
var bodyParser = require("body-parser");

var app = express();
var port = 3306;

// use express
app.use(express.static)

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

