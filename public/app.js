angular.module('devvideo', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: './templates/login.html',
				controller: 'loginCtrl'
			})
			.state('dash', {
				url: '/dash/:id',
				templateUrl: './templates/dash.html',
				controller: 'dashCtrl',
				resolve: {
					recentVideos: function(dashService, $stateParams) {
						if ($stateParams.id) {
							return dashService.getMostRecentVids();
						} else {
							return {data:null};
						}
					}
				}
			})
			.state('list', {
				url: '/list/:topic',
				templateUrl: './templates/list.html',
				controller: 'listCtrl',
				resolve: {
					topicVideos: function(videoService, $stateParams) {
						if ($stateParams.topic) {
							return videoService.getTopicVideos($stateParams.topic);
						} else {
							return {data:null};
						}
					}
				}

			})
			.state('instList', {
				url: '/instList/:instructor',
				templateUrl: './templates/instList.html',
				controller: 'instListCtrl',
				resolve: {
						instructorVideos: function(videoService, $stateParams) {
						if ($stateParams.instructor) {
							return videoService.getInstructorVideos($stateParams.instructor);
						} else {
							return {data:null}
						}
					}
				}
			})
			.state('cohortList', {
			url: '/cohortList/:cohort',
			templateUrl: './templates/cohortList.html',
			controller: 'cohortListCtrl',		
			resolve: {
				cohortVideos: function(videoService, $stateParams) {
					console.log($stateParams.cohort)
						if ($stateParams.cohort) {
							return videoService.getCohortVideos($stateParams.cohort);
						} else {
							return {data:null}
						}
					}
				}
			})
			.state('topList', {
			url: '/topList',
			templateUrl: './templates/topList.html',
			controller: 'topRatedCtrl',		
			resolve: {
				topRatedVideos: function(videoService) {
						return videoService.getTopRatedVideos();
					}
				}
			})
			.state('youRated',  {
				url: '/youRated',
				templateUrl: './templates/youRated.html',
				controller: 'youRatedCtrl',
				resolve: {
					userRatedVideos: function(videoService) {
						return videoService.getUserRatedVideos();
					}
				}
			})
			.state('allVids', {
				url: '/all',
				templateUrl: './templates/all.html',
				controller: 'allVidsCtrl',
				resolve: {
					allVideos: function(videoService) {
						return videoService.getAllVideos();
					}
				}
			})

		$urlRouterProvider
			.otherwise ('/dash');
	})