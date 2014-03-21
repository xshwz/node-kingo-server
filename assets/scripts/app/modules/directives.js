define([
  'angular',
  'directives/sidebar'
], function (angular, sidebar) {
  angular.module('directives', [])
    .directive('sidebar', sidebar);
});
