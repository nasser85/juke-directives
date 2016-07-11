juke.directive('songList', function(PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/song/templates/song-list.html',
		scope: {
			artistSongs: '='
		},
		link: function(scope, element, attrs) {
			console.log(scope.artistSongs);
			scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.artistSongs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };

			 scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			 };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };
		}

	}
})
