var songDirectives = angular.module('songDirectives',[]);

songDirectives.directive('songList', function(PlayerFactory){
    return {
        restrict: 'E',
        scope: {
            songs: '=',
        },
        templateUrl: '/js/song/templates/songList.html',
        link: function (scope, element, attr){

            scope.getCurrentSong = function () {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function (song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };

            scope.toggle = function (song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, scope.songs);
                } else if ( PlayerFactory.isPlaying() ) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };
        }
    };
});


songDirectives.directive('doubleClick', function(PlayerFactory){
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'
            //foo: '&doubleClick'
        },
        link: function (scope, element, attr){

            element.on('dblclick', function () {
                scope.doubleClick();
                //scope.foo();
            });
        }
    };
});