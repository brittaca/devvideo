angular.module('vidInterface')

.directive('navBar', function() {

	return {
		restrict: 'E',
		templateUrl: './js/directives/navBar/navBar.html',
		controller: 'mainCtrl',
		scope: {
			instructor: '='
		}
	}

});