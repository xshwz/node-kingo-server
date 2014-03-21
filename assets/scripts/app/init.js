define(['app', 'lodash', 'modules/sidebar'], function (app, _, sidebar) {
  app.run(['$rootScope', '$http', '$location',
    function ($scope, $http, $location) {
      $scope._ = _;
      $scope.sidebar = new sidebar();

      $scope.getCurrentPath = function () {
        return $location.path().substr(1);
      };

      $scope.setTitle = function (title) {
        document.title = title + ' - ' + $scope.appName;
        $scope.title = title;
      };

      $scope.fetchInfo = function (callback) {
        $http.get('/app/info?r=' + Math.random()).success(function (data) {
          _.each(data, function (value, key) {
            $scope[key] = value;
          });

          if (callback) {
            callback();
          }
        });
      };

      $scope.fetchInfo();
    }
  ]);
});
