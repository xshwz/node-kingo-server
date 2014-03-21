define([
  'angular',
  'filters/demo'
], function (angular, demo) {
  angular.module('filters', [])
    .filter('demo', demo);
});
