angular.module('vidInterface')
.service('searchMenuService', function($state, $http, $q) {

	// this.videos = [];

	this.getVideos = function() {
		return $http.get('api/videos')
		.then(function(response) {
			return response.data;
		})
	}

	this.getVideo = function(videoId) {
		return $http.get('api/video' + '/?id=' + videoId)
	}


});