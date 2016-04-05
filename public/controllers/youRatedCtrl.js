angular.module('devvideo')

.controller('youRatedCtrl', function($scope, $state,  videoService, userRatedVideos) {

	console.log(userRatedVideos)
	
	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.userRatedVideos = userRatedVideos;

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});