angular.module('devvideo')

.service('loginService', function($http) {

	this.getUsers = function() {
		return $http.get('api/users')
		.then(function(response) {
			return response.data;
		})
	}

	this.getUser = function(email) {
		return $http.get('api/user?email=' + email)
	}

});