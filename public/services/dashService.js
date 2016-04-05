angular.module('devvideo')

.service('dashService', function($http) {

	this.getMostRecentVids = function() {
		return $http.get('api/recentvideos')
		.then(function(response) {
			return response.data;
		})
	}

})