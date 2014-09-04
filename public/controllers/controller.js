var ctrlModule = angular.module('ctrlModule', []);

ctrlModule.controller('LoginCtrl', function($scope, $http, $location){

		

		$scope.login = function(){
			var user = {
				username : $scope.username,
				password : $scope.password
			};
			$http.post('/login', user)
				.success(function(data){
					//$rootScope.authorized = true;
					//$rootScope.token = data.token;
					console.log($rootScope.authorized);
				})
				.error(function(data){
					$location.path('/');
				});
		};
});