//server API routing
var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app) {

	//get all customers
	app.get('/customers', function(req, res) {
		customers.index(req, res);
	});

	//add a customer
	app.post('/customers', function(req, res) {
		customers.create(req, res);
	});

	//delete a customer
	app.post('/customers/:id', function(req, res) {
		customers.delete(req, res);
	});

	//get all products
	app.get('/products', function(req, res) {
		products.index(req, res);
	});

	//add a product
	app.post('/products', function(req, res) {
		products.create(req, res);
	});

	//get all orders
	app.get('/orders', function(req, res) {
		orders.index(req, res);
	});

	//add an order
	app.post('/orders', function(req, res) {
		orders.create(req, res);
	});

	//delete an order
	app.post('/orders/:id', function(req, res) {
		orders.delete(req, res);
	})
}