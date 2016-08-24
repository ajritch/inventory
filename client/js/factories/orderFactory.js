app.factory('orderFactory', function($http) {
	var factory = {};
	var orders = [];

	//get all orders
	factory.index = function(callback) {
		$http.get('/orders').success(function(output) {
			callback(output);
		});
	}

	//add an order
	factory.add = function(order, callback) {
		$http.post('/orders', order).success(function(output) {
			callback(output);
		});
	}

	//delete an order
	factory.delete = function(order, callback) {
		$http.post('/orders/' + order._id).success(function(output) {
			callback(output);
		});
	}

	return factory;
});