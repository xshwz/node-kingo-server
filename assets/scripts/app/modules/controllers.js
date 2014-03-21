define([
  'angular',
  'controllers/login',
  'controllers/logout'
], function (app, login, logout) {
  angular.module('controllers', [])
    .controller('login', login)
    .controller('logout', logout);
});
