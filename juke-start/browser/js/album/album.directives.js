var albumDirectives= angular.module('albumDirectives',[]);

albumDirectives.directive('albumList', function(){
	return {
		restrict: 'E',
		scope: {

		},
		templateUrl: '/js/album/templates/albums.html'
	};
});

