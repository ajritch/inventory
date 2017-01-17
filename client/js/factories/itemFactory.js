app.factory('itemFactory', function($http) {
	var factory = {};
	var items = [];

	//get all items
	factory.index = function(callback) {
		$http.get('/items').then(function(output) {
			callback(output.data.upc);
		});
	}

	//add an item
	factory.add = function(item, callback) {
		$http.post('/items', item).then(function(output) {
			callback(output.data.upc);
		})
	}

	//delete an item
	factory.delete = function(item, callback) {
		$http.post('/items/' + item._id).then(function(output) {
			callback(output.data.upc);
		});
	}

	return factory;
});