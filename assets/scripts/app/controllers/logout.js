define(function () {
  return ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
      $http.get('/logout').success(function () {
        $scope.fetchInfo();
        $location.path('/login');
      });
    }
  ];
});
