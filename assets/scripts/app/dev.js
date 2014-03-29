require.config({
  paths: {
    'lodash': '../lodash.min',
    'jquery': '../jquery.min',
    'jquery-cookie': '../jquery.cookie.min',
    'twitter-bootstrap': '../bootstrap.min',
    'angular': '../angular.min',
    'angular-sanitize': '../angular-sanitize.min',
    'angular-route': '../angular-route.min'
  },
  shim: {
    'lodash': {
      exports : '_'
    },
    'jquery': {
      exports : 'jquery'
    },
    'jquery-cookie': {
      deps : ['jquery']
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
    }
  },
  deps: ['jquery', 'jquery-cookie', 'twitter-bootstrap']
});

require(['angular', 'modules/routes', 'init'], function (angular) {
  angular.bootstrap(document, ['app']);
});
