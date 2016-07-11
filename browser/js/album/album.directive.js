juke.directive('albumList', function() {
	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/albumList.html',
		scope: {
			artistAlbums : '='
		},
		link: function(scope, element, attrs) {
			console.log(scope);
			//scope.artistAlbums = artistAlbums;
		}
	}
})