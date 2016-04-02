angular.module('devvideo')
.service('videoService', function($state, $http, $q) {

	// this.videos = [];

	this.getVideos = function() {
		return $http.get('api/videos')
		.then(function(response) {
			return response.data;
		})
	}

	this.getVideo = function(videoId) {
		return $http.get('api/video' + '/?id=' + videoId)
		.then(function(video) {
			return video.data;
		})
	}

	this.rateVideo = function(videoId, rating) {
		return $http.post('api/ratevideo/' + videoId + '/?rating=' + rating)
	}

	this.getTopicVideos = function(topic) {
		return $http.get('api/topicvideos?topic=' + topic)
		.then(function(topicVideos) {
			console.log(topicVideos)
			return topicVideos.data;
		})
	}

});