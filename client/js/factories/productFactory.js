app.factory('productFactory', function($http) {
	var factory = {};
	var products = [];

	factory.index = function(callback) {
		$http.get('/products').success(function(output) {
			callback(output);
		});
	}

	//add a new product
	factory.add = function(product, callback) {
		$http.post('/products', product).success(function(output) {
			callback(output);
		});
	}

	return factory;
});