angular.module('devvideo')

.controller('mainCtrl', function($scope, $state, videoService) {

	$scope.title = 'Video Archives';

	$scope.videos = []

	$scope.topics = [];

	$scope.instructors = [];

	$scope.cohorts = [];

	$scope.ratingsAverages = [];

	$scope.topRated = [];

	$scope.instructorVideos = [];

	$scope.topicVideos = [];

	$scope.cohortVideos = [];

	$scope.toggleTopics = function() {
		$scope.showTopics = !$scope.showTopics;
	};

	$scope.toggleInst = function() {
		$scope.showInst = !$scope.showInst;
	};

	$scope.toggleInstVids= function() {
		$scope.showInstVids = !$scope.showInstVids;
	};

	$scope.toggleCoh = function() {
		$scope.showCoh = !$scope.showCoh;
	};

	$scope.toggleTop = function() {
		$scope.showTop = !$scope.showTop;
	};

	$scope.toggleAll = function() {
		$scope.showAll = !$scope.showAll;
	};

	$scope.getVideos = function() {
		videoService.getVideos()
		.then(function(response) {
			response.forEach(function(video) {
				$scope.videos.push(video);
			})
			$scope.getInstructors();
			$scope.getTopics();
			$scope.getCohorts();
			$scope.getAvgRatings();
			$scope.getTopRated();
		})
	}

	$scope.getVideos();

	$scope.getTopics = function() {
		$scope.videos.forEach(function(video) {
			for(var i = 0; i < video.topics.length; i++) {
				if ($scope.topics.indexOf(video.topics[i]) === -1) {
					$scope.topics.push(video.topics[i]);
				}
			}
		})
	}

	// $scope.getTopicVideos = function(topic) {
	// 	$state.go('list');
	// 		var topicVideos = [];
	// 	$scope.videos.forEach(function(video) {
	// 		for(var i = 0; i < video.topics.length; i++) {
	// 			if(topic === video.topics[i] && topicVideos.indexOf(video) === -1) {
	// 				topicVideos.push(video)
	// 			}
	// 		}
	// 	})
	// 	$scope.topicVideos = topicVideos;
	// }

	$scope.getInstructors = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.instructors.indexOf(video.instructor) === -1) {
				$scope.instructors.push(video.instructor);
			}
		})
	}

	// $scope.getInstructorVideos = function(instructor) {
	// 	$state.go('list');
	// 		var instructorVideos = [];
	// 	$scope.videos.forEach(function(video) {
	// 		if(instructor === video.instructor && instructorVideos.indexOf(video) === -1) {
	// 				instructorVideos.push(video);
	// 		}	
	// 	})
	// 	$scope.instructorVideos = instructorVideos;
	// }


	$scope.getCohorts = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.cohorts.indexOf(video.cohort) === -1) {
				$scope.cohorts.push(video.cohort);
			}
		})
	}

	// $scope.getCohortVideos = function(cohort) {
	// 	$state.go('list');
	// 		var cohortVideos = [];
	// 	$scope.videos.forEach(function(video) {
	// 			if (cohortVideos.indexOf(video) === -1 && cohort === video.cohort) {
	// 				cohortVidoes.push(video)
	// 			}
	// 	})
	// 	$scope.cohortVideos = cohortVideos;
	// }

	$scope.getAvgRatings  = function() {
		$scope.videos.forEach(function(video) {
			var sum = 0;
			for (var i = 0; i < video.ratings.length; i++) {
				sum = sum + video.ratings[i].stars;
			}
			$scope.ratingsAverages.push(sum/video.ratings.length);
		})
	}

	$scope.getTopRated = function() {
		$scope.videos.forEach(function(video) {
			var sum = 0;
			for (var i = 0; i < video.ratings.length; i++) {
				sum = sum + video.ratings[i].stars;
			}
				if (sum/video.ratings.length >= 4) {
					$scope.topRated.push(video);
				}
		})
	}
	
	$scope.directToPlayer = function(videoId) {
		$state.go('watch', {id: videoId} )
	}

	$scope.getTopicVideos = function(topic) {
		$state.go('list', {topic: topic} )
	}

	$scope.getInstructorVideos = function(instructor) {
		$state.go('instList', {instructor: instructor} )
	}

	$scope.getCohortVideos = function(cohort) {
		$state.go('cohortList', {cohort: cohort})
	}

	$scope.getTopRatedVideos = function() {
		$state.go('topList')
	}

	$scope.getUserRatedVideos = function() {
		$state.go('youRated')
	}

	$scope.listAllVideos = function() {
		$state.go('allVids')
	}



});