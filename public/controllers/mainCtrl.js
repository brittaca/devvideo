angular.module('vidInterface')

.controller('mainCtrl', function($scope, $state, searchMenuService) {

	$scope.test = 'Video Archives';

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
		searchMenuService.getVideos()
		.then(function(response) {
			response.forEach(function(video) {
				$scope.videos.push(video);
			})
			console.log("lolo", $scope.videos);
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
		console.log($scope.topics);
	}

	$scope.getTopicVideos = function(topic) {
		$state.go('search');
			var topicVideos = [];
		$scope.videos.forEach(function(video) {
			for(var i = 0; i < video.topics.length; i++) {
				if(topic === video.topics[i] && topicVideos.indexOf(video) === -1) {
					topicVideos.push(video)
				}
			}
		})
		$scope.topicVideos = topicVideos;
		console.log($scope.topicVideos);
	}

	$scope.getInstructors = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.instructors.indexOf(video.instructor) === -1) {
				$scope.instructors.push(video.instructor);
			}
		})
	}

	$scope.getInstructorVideos = function(instructor) {
		$state.go('search');
			var instructorVideos = [];
		$scope.videos.forEach(function(video) {
			if(instructor === video.instructor && instructorVideos.indexOf(video) === -1) {
					instructorVideos.push(video);
			}	
		})
		$scope.instructorVideos = instructorVideos;
		console.log($scope.instructorVideos);
	}


	$scope.getCohorts = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.cohorts.indexOf(video.cohort) === -1) {
				$scope.cohorts.push(video.cohort);
			}
		})
		console.log($scope.cohorts);
	}

	$scope.getCohortVideos = function(cohort) {
		$state.go('search');
			var cohortVideos = [];
		$scope.videos.forEach(function(video) {
				if (cohortVideos.indexOf(cohortVideos[i]) === -1 && cohort === video.cohort) {
					cohortVidoes.push(video)
				}
		})
		$scope.cohortVideos = cohortVideos;
	}

	$scope.getAvgRatings  = function() {
		$scope.videos.forEach(function(video) {
			var sum = 0;
			for (var i = 0; i < video.ratings.length; i++) {
				sum = sum + video.ratings[i].stars;
			}
			$scope.ratingsAverages.push(sum/video.ratings.length);
		})
		console.log($scope.ratingsAverages);
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
		console.log($scope.topRated);
	}
	
	$scope.directToPlayer = function(videoId) {
		$state.go('watch', {id: videoId} )
	}

	var queryObj = {
	cohort: 41
	}

});