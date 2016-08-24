app.controller('ProductsController', function($scope, productFactory) {

	$scope.products = [];
	$scope.newProduct = {};

	//callback to set products
	function setProducts(data) {
		$scope.errors = [];
		// console.log(data);
		if (data['errors']) {
			for (var i in data['errors']) {
				$scope.errors.push(data['errors'][i].message);
			}
		} else {
			$scope.products = data;
			$scope.newProduct = {};
		}
	}

	//get all products
	productFactory.index(setProducts);

	//add a product
	$scope.add = function() {
		productFactory.add($scope.newProduct, setProducts);
	}



})