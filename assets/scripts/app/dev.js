require.config({
  paths: {
    'lodash': '../lodash.min',
    'jquery': '../jquery.min',
    'twitter-bootstrap': '../bootstrap.min',
    'angular': '../angular.min',
    'angular-sanitize': '../angular-sanitize.min',
    'angular-route': '../angular-route.min',
    'angular-resource': '../angular-resource.min'
  },
  shim: {
    'lodash': {
      exports : '_'
    },
    'jquery': {
      exports : 'jquery'
    },
    'twitter-bootstrap': {
      deps: ['jquery']
    },
    'angular': {
      deps:['jquery'],
      exports : 'angular'
    },
    'angular-sanitize': {
      deps:['angular']
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    }
  },
  deps: ['jquery', 'twitter-bootstrap']
});

require(['angular', 'modules/routes', 'init'], function (angular) {
  angular.bootstrap(document, ['app']);
});
