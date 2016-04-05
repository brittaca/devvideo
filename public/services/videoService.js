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
		return $http.get('api/topicvideos/?topic=' + topic)
		.then(function(topicVideos) {
			return topicVideos.data;
		})
	}

	this.getInstructorVideos = function(instructor) {
		return $http.get('api/instructorvideos/?instructor=' + instructor)
		.then(function(instructorVideos) {
			return instructorVideos.data;
		})
	}

	this.getCohortVideos = function(cohort) {
		return $http.get('api/cohortvideos/?cohort=' + cohort)
		.then(function(cohortVideos) {
			return cohortVideos.data;
		})
	}

	this.getTopRatedVideos = function() {
		return $http.get('api/topratedvideos')
		.then(function(topRatedVideos) {
			return topRatedVideos.data;
		})
	}

	this.getUserRatedVideos = function() {
		return $http.get('api/uservideos')
		.then(function(userRatedVideos) {
			return userRatedVideos.data;
		})
	}

	this.getAllVideos = function() {
		return $http.get('api/allvideos')
		.then(function(allVideos) {
			return allVideos.data;
		})
	}
});