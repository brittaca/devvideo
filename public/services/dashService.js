angular.module('vidInterface')

.service('dashService', function($http) {

	this.getMostRecentVids = function() {
		$http.get('api/recentvideos');
	}

})