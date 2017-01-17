var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'static/partials/items.html'
		})
        .when('/add', {
            templateUrl: 'static/partials/add.html',
            title: 'Add Item'
        })
		.otherwise({
			redirectTo: '/'
		});

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
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