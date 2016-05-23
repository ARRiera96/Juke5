var playerDirectives= angular.module('playerDirectives', []);

playerDirectives.directive('myPlayer', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/player/templates/player.html',
		//Why use link, instead of controller ???
		link: function(scope){
			angular.extend(scope, PlayerFactory); // copy props from param2 to param1

			scope.toggle = function () {
			  if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
			  else PlayerFactory.resume();
			};

			scope.getPercent = function () {
			  return PlayerFactory.getProgress() * 100;
			};

		}
	};

});