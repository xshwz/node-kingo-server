define([
  'angular',
  'angular-route',
  'angular-sanitize',
  'modules/controllers',
  'modules/directives',
  'modules/filters'
], function (angular) {
  return angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'controllers',
    'directives',
    'filters'
  ]);
});
