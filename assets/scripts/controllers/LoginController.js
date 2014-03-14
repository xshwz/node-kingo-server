var LoginController = ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope.doLogin = function (sid, pwd) {
      var $submit = $('#button-submit');

      $submit.button('loading');

      $http.post('/login', {
        sid: $('#input-user').val(),
        pwd: $('#input-password').val()
      }).success(function (result) {
        if (result.state) {
          $scope.loginError = null;
          $scope.fetchInfo(function () {
            if (!$scope.student.archives) {
              $submit.text('正在获取数据……');
              $http.get('/api/archives').success(function (data) {
                $scope.student.archives = data;
              });
            }
          });
        } else {
          if (result.error == 'timeout') {
            $scope.loginError = '无法连接到教务系统';
          } else {
            $scope.loginError = '登录失败，可能是学号或密码不正确';
          }

          $submit.button('reset');
        }
      });
    };
  }
];
