juke.directive('player' ,function (PlayerFactory) {
  return {
    restrict : 'EA',
    templateUrl : '/js/player/templates/playerElement.html',
    link: function (scope, element, attrs) {
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1

      scope.toggle = function () {
        console.log(scope);
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };

      scope.handleProgressClick = function (evt) {
        PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
      };

    }
  };
});
