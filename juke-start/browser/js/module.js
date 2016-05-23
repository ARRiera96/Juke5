'use strict';

var juke = angular.module('juke', ['ui.router', 'ngMessages', 'sidebarDirectives', 'playerDirectives', 'albumDirectives', 'songDirectives']);

juke.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});
