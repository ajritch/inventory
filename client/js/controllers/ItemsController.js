app.controller('ItemsController', function($scope, itemFactory) {

	$scope.items = [];
	$scope.newItem = {};

	//callback to set items
	function setItems(data) {
		//check for errors	
		$scope.errors = [];
		//if duplicate error!
		if (data['duplicate_error']) {
			$scope.errors.push(data['duplicate_error']);
		} else if (data['errors']) {
			for(var i in data['errors']) {
				$scope.errors.push(data['errors'][i].message);
			}
		} else {
			$scope.items = data;
			$scope.newItem = {};
		}
	}

	//get all items
	itemFactory.index(setItems);

	//add a item
	$scope.add = function() {
		itemFactory.add($scope.newItem, setItems);
	}

	//remove a item
	$scope.delete = function(item) {
		itemFactory.delete(item, setItems);
	}

})