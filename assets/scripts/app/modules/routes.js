define(['app'], function (app) {
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/public/index.html'
      })
      .when('/about', {
        templateUrl: 'views/public/about.html'
      })
      .when('/wechat', {
        templateUrl: 'views/public/wechat.html'
      })
      .when('/feedback', {
        templateUrl: 'views/public/feedback.html'
      })
      .when('/faq', {
        templateUrl: 'views/public/faq.html'
      })
      .when('/login', {
        templateUrl: 'views/public/login.html',
        controller: 'login'
      })
      .when('/logout', {
        templateUrl: 'views/public/login.html',
        controller: 'logout'
      })
      .when('/student/archives', {
        templateUrl: 'views/student/archives.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
});
