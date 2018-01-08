// import Express
var express = require("express");
var router = express.Router();

// import burger.js
var burger = require("..models/burger.js");

// Create the router for the app
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbs = {
			burger: data
		};
		console.log(hbs);
		res.render("", hbs); 
	});
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne([
		], [
		req.body.##, req.body.##
		], function(result) {
			res.json({ id: result.insertId });
		});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		##: req.body.##
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} 
		else {
			res.status(200).end();
		}
	});
});

// export the router at the end of your file.
module.exports = router;


