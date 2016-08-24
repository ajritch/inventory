var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'static/partials/dashboard.html'
		})
		.when('/customers', {
			templateUrl: 'static/partials/customers.html'
		})
		.when('/products', {
			templateUrl: 'static/partials/products.html'
		})
		.when('/orders', {
			templateUrl: 'static/partials/orders.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

//range filter to display lots of options
app.filter('range', function() {
  return function(input, start, end) {    
    start = parseInt(start);
    end = parseInt(end);
    var direction = (start <= end) ? 1 : -1;
    while (start != end) {
        input.push(start);
        start += direction;
    }
    return input;
  };
});