// import orm.js into burger.js
var orm = require("../Config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

	all: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insert: function(cols, vals, cb) {
		orm.insertOne("burgers", function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.updateOne("burgers", function(res) {
			cb(res);
		});
	}
};


// Export at the end of the burger.js file.
module.exports = burger;