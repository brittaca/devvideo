angular.module('devvideo')

.service('dashService', function($http) {

	this.getMostRecentVids = function() {
		$http.get('api/recentvideos');
	}

})