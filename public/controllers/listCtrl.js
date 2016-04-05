angular.module('devvideo')

.controller('listCtrl', function($scope, $state, videoService, topicVideos) {

	// $scope.topicVideos = [];

	// $scope.getTopicVideos = function(topic) {
	// 	videoService.getTopicVideos(topic)
	// 	.then(function(topicVideos) {
	// 		topicVideos.forEach(function(video) {
	// 			$scope.topicVideos.push(topicVideos.data)
	// 		})	
	// 	});
	// }

	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.topicVideos = topicVideos;

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

});