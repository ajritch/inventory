app.factory('customerFactory', function($http) {
	var factory = {};
	var customers = [];

	//get all customers
	factory.index = function(callback) {
		$http.get('/customers').success(function(output) {
			callback(output);
		});
	}

	//add a customer
	factory.add = function(customer, callback) {
		$http.post('/customers', customer).success(function(output) {
			callback(output);
		})
	}

	//delete a customer
	factory.delete = function(customer, callback) {
		$http.post('/customers/' + customer._id).success(function(output) {
			callback(output);
		});
	}

	return factory;
});