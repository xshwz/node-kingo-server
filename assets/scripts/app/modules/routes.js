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
      .when('/student/effective_scores', {
        templateUrl: 'views/student/effective_scores.html',
        controller: 'effective_scores'
      })
      .when('/student/original_scores', {
        templateUrl: 'views/student/original_scores.html',
        controller: 'original_scores'
      })
      .when('/student/scores_stats', {
        templateUrl: 'views/student/scores_stats.html',
        controller: 'scores_stats'
      })
      .when('/student/today_courses', {
        templateUrl: 'views/student/today_courses.html',
        controller: 'today_courses'
      })
      .when('/student/curriculum', {
        templateUrl: 'views/student/curriculum.html',
        controller: 'curriculum'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
});
