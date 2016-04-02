angular.module('devvideo')

.directive('navBar', function() {

	return {
		restrict: 'E',
		templateUrl: './templates/navBar.html',
		controller: 'mainCtrl',
		scope: {
			instructor: '='
		}
	}

});