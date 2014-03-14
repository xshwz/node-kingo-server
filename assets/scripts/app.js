angular.module('kingo', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/wechat', {
      templateUrl: 'views/wechat.html'
    })
    .when('/feedback', {
      templateUrl: 'views/feedback.html'
    })
    .when('/faq', {
      templateUrl: 'views/faq.html'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: LoginController
    })
    .when('/logout', {
      templateUrl: 'views/login.html',
      controller: LogoutController
    })
    .when('/student/archives', {
      templateUrl: 'views/archives.html'
    });
}])

.run(['$rootScope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope._ = _;

    $scope.$location = $location;

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

    angular.element(document).ready(function () {
      $scope.sidebar = new Sidebar();
    });

    $scope.onload = function () {
      if ($scope.sidebar.isOn()) {
        $scope.sidebar.hideSidebar();
      }

      $scope.sidebar.$body.scrollTop(0);
    };
  }
]);
