angular.module('vidInterface', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('landing', {
				url: '/login',
				templateUrl: './js/views/login/login.html',
				controller: 'loginCtrl'
			})
			.state('dash', {
				url: '/dash',
				templateUrl: './js/views/dash/dash.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: './js/views/search/search.html',
				controller: 'mainCtrl'
			})
			.state('watch', {
				url: '/watch/:id',
				templateUrl: './js/views/watch/watch.html',
				controller: 'watchCtrl',
				resolve: {
					video: function(searchMenuService, $stateParams) {
						if ($stateParams.id) {
							return searchMenuService.getVideo($stateParams.id);
						} else {
							return {data:null};
						}
					}
				}
			})

		$urlRouterProvider
			.otherwise ('/dash');
	})