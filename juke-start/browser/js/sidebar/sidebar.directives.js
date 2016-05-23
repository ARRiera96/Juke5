var sidebarDirectives= angular.module('sidebarDirectives', []);

sidebarDirectives.directive('mySidebar', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/sidebar/templates/sidebar.html'
	};

});