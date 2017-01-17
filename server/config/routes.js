//server API routing
var items = require('./../controllers/items.js');


module.exports = function(app) {

	//get all items
	app.get('/items', function(req, res) {
		items.index(req, res);
	});

	//add an item
	app.post('/items', function(req, res) {
		items.create(req, res);
	});

	//delete an item
	app.post('/items/:id', function(req, res) {
		items.delete(req, res);
	});

	//get one item
	app.get('/items/:code', function(req, res) {
		items.get(req, res);
	});

}