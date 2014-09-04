angular.module('main', ['ctrlModule', 'ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		// $rootScope.authorized = false;

		$routeProvider
			.when('/', {
				templateUrl : '/views/partials/login.html',
				controller : 'LoginCtrl'
			})
			.otherwise({
				redirectTo : '/'
			});

		$locationProvider.html5Mode(true);
	}]);