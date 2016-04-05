angular.module('devvideo')

.controller('dashCtrl', function($scope, $state, dashService, recentVideos) {

	console.log(recentVideos)
	
	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.recentVideos = recentVideos;

	// $scope.getRecentVideos = function() {
	// 	dashService.getMostRecentVideos()
	// 	.then(function(response) {
	// 		response.forEach(function(video) {
	// 			$scope.recentVideos.push(video);
	// 		})
	// 	})
	// }

	// $scope.getRecentVideos();

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});