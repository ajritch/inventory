app.controller('CustomersController', function($scope, customerFactory) {

	$scope.customers = [];
	$scope.newCustomer = {};

	//callback to set customers
	function setCustomers(data) {
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
			$scope.customers = data;
			$scope.newCustomer = {};
		}
	}

	//get all customers
	customerFactory.index(setCustomers);

	//add a customer
	$scope.add = function() {
		customerFactory.add($scope.newCustomer, setCustomers);
	}

	//remove a customer
	$scope.delete = function(customer) {
		customerFactory.delete(customer, setCustomers);
	}

})