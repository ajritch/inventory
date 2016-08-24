app.controller('DashboardsController.js', function($scope, orderFactory, productFactory, customerFactory) {
	$scope.products = [];
	$scope.orders = [];
	$scope.customers = [];

	//callbacks to set everything
	function setOrders(data) {
		$scope.orders = data;
	}
	function setProducts(data) {
		$scope.products = data;
	}
	function setCustomers(data) {
		$scope.customers = data;
	}

	//set the data
	orderFactory.index(setOrders);
	productFactory.index(setProducts);
	customerFactory.index(setCustomers);

	

});