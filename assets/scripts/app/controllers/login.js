define(['jquery', 'lodash'], function ($, _) {
  return ['$scope', '$http', function ($scope, $http) {
    $scope.doLogin = function () {
      var $submit = $('#button-submit'),
          sid     = $('#input-user').val(),
          pwd     = $('#input-password').val();

      $submit.button('loading');
      $http.post('/login', {sid: sid, pwd: pwd}).success(function (result) {
        if (result.state) {
          $scope.loginError = null;
          $scope.fetchInfo(function () {
            var students = $.cookie('students') ?
                             JSON.parse($.cookie('students')) : {};

            students[sid]  =  students[sid] || {};

            _.forEach($scope.student.fields, function (field) {
              if (!students[sid][field]) {
                (function (field) {
                  $http.get('/student/' + field).success(function (data) {
                    students[sid][field] = data;
                    $scope.$parent.student = students[sid];
                    $.cookie('students', JSON.stringify(students));
                  });
                })(field);
              }
            });
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
  }];
});
