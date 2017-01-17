app.factory('itemFactory', function($http) {
	var factory = {};
	var items = [];

	//get all items
	factory.index = function(callback) {
		$http.get('/items').success(function(output) {
			callback(output);
		});
	}

	//add an item
	factory.add = function(item, callback) {
		$http.post('/items', item).success(function(output) {
			callback(output);
		})
	}

	//delete an item
	factory.delete = function(item, callback) {
		$http.post('/items/' + item._id).success(function(output) {
			callback(output);
		});
	}

	return factory;
});