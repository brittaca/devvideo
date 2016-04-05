angular.module('devvideo')

.controller('instListCtrl', function($scope, $state,  videoService, instructorVideos) {

	$scope.optionsList = [1, 2, 3, 4, 5];

	$scope.instructorVideos = instructorVideos;

	console.log($scope.rating)

	$scope.rateVideo = function(video, rating) {
		videoService.rateVideo(video._id, rating)
		$state.reload();
	}

})
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);