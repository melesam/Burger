var bodyParser = require('body-parser')
var express = require('express')
var path = require("path");

// method-override
var methodOverride = require("method-override");

// set handlebars
var exphbs = require("express-handlebars");



var app = express()

var PORT = process.env.PORT || 8080;
 



 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(methodOverride("_method")); 

require("./controllers/burger_controller.js")(app);
 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})





