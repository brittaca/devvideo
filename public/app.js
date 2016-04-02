angular.module('devvideo', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: './templates/login.html',
				controller: 'loginCtrl'
			})
			.state('dash', {
				url: '/dash',
				templateUrl: './templates/dash.html'
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
			.state('watch', {
				url: '/watch/:id',
				templateUrl: './js/views/watch/watch.html',
				controller: 'watchCtrl',
				resolve: {
					video: function(videoService, $stateParams) {
						if ($stateParams.id) {
							return videoService.getVideo($stateParams.id);
						} else {
							return {data:null};
						}
					}
				}
			})

		$urlRouterProvider
			.otherwise ('/dash');
	})