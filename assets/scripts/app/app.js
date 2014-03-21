define([
  'angular',
  'angular-route',
  'angular-sanitize',
  'angular-resource',
  'modules/controllers',
  'modules/directives',
  'modules/filters'
], function (angular) {
  return angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'controllers',
    'directives',
    'filters'
  ]);
});
