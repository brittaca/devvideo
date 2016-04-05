angular.module('devvideo')

.controller('allVidsCtrl', function($scope, $state,  videoService, allVideos) {

	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.allVideos = allVideos;

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});