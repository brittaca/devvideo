angular.module('vidInterface')

.controller('loginCtrl', function($scope, $state, loginService) {

	$scope.users = [];

	$scope.email = "email";

	$scope.password = "password";

	$scope.getUsers = function() {
		loginService.getUsers()
		.then(function(response) {
			response.forEach(function(user) {
				$scope.users.push(user);
			})
		})
	}

	$scope.getUsers();

	$scope.verifyUser = function() {
		for (var i = 0; i < $scope.users.length; i++) {
			if ($scope.email === $scope.users[i].email && $scope.password === $scope.users[i].password) {
				$scope.youMayEnter($scope.users[i]._id);
			}
		}
	}

	$scope.youMayEnter = function(userId) {
		console.log('userId', userId)
		$state.go('dash', {id: userId})
	}

	// var video = Video.get({ id: $scope.id }, function() {
	// 	console.log(video);
	// })

	// var videos = Video.query(function() {
	// 	console.log(videos);
	// })

	// $scope.video = new Video();

	// $scope.video.$save(function() {
	// 	$scope.video;
	// })

	// $scope.comment = Video.get({ id: $scope.id }, function() {
	// 	$scope.video.data = "comments?";
	// 	$scope.video.$update(function() {

	// 	});
	// })

	// $scope.doSearch = function () {

 //    var type = $scope.mediaType;
 //    $scope.foundItems = directoryService.search().length;
 //    console.log("Found items :"+ $scope.foundItems + "for search term :"+ $scope.searchTerm);
 //    $location.path("/search");
	// }

})