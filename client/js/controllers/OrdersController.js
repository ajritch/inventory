app.controller('OrdersController', function($scope, orderFactory, productFactory, customerFactory) {

	$scope.orders = [];
	$scope.customers = [];
	$scope.products = [];
	$scope.newOrder = {};

	//callbacks to set scope variables
	function setCustomers(data) {
		$scope.customers = data;
	}
	function setProducts(data) {
		$scope.products = data;
	}
	function setOrders(data) {
		//error handling
		$scope.errors = [];
		if (data['quant_error']) {
			$scope.errors.push(data['quant_error']);
		} else if (data['errors']) {
			for (var i in data['errors']) {
				$scope.errors.push(data['errors'][i].message);
			}
		} else {
			$scope.orders = data;
			$scope.newOrder = {};
		}
	}

	//initialize data
	customerFactory.index(setCustomers);
	productFactory.index(setProducts);
	orderFactory.index(setOrders);

	//add an order
	$scope.add = function() {
		orderFactory.add($scope.newOrder, setOrders);
	}

	//delete an order
	$scope.delete = function(order) {
		orderFactory.delete(order, setOrders);
	}

})