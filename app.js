var mainCtrl = function($scope, $http) {
  $scope.doSearch = function() {
    var url = 'http://gdata.youtube.com/feeds/api/videos?'
        + [
          'q=' + encodeURIComponent($scope.query),
          'max-results=10',
          'v=2',
          'alt=json',
          'callback=JSON_CALLBACK'
        ].join('&');
    $http.jsonp(url).success(function(data){
      console.dir(data);
      $scope.results = data.feed.entry;
    });
  }
}
