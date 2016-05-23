var albumDirectives= angular.module('albumDirectives',[]);

albumDirectives.directive('albumList', function(){
	return {
		restrict: 'E',
		scope: {
			albums: '='
		},
		templateUrl: '/js/album/templates/albumList.html'
	};
});

