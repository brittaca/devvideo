angular.module('devvideo')

.controller('cohortListCtrl', function($scope, $state,  videoService, cohortVideos) {

	console.log(cohortVideos);

	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.cohortVideos = cohortVideos;

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});