angular.module('devvideo')

.controller('topRatedCtrl', function($scope, $state,  videoService, topRatedVideos) {

	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.topRatedVideos = topRatedVideos;

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});