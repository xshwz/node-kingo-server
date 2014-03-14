module.exports = {
  port: 3000,
  environment: 'development',
  staticFile: '',
  scripts: {
    common: [
    ],
    app: [
      //'http://cdn.staticfile.org/lodash.js/2.4.1/lodash.min.js',
      //'http://cdn.staticfile.org/jquery/1.11.0/jquery.min.js',
      //'http://cdn.staticfile.org/twitter-bootstrap/3.1.1/js/bootstrap.min.js',
      //'http://cdn.staticfile.org/angular.js/1.2.10/angular.min.js',
      //'http://cdn.staticfile.org/angular.js/1.2.10/angular-route.min.js',
      //'http://cdn.staticfile.org/angular.js/1.2.10/angular-resource.min.js',
      //'http://cdn.staticfile.org/angular.js/1.2.10/angular-sanitize.min.js',

      'scripts/lodash.min.js',
      'scripts/jquery.min.js',
      'scripts/bootstrap.min.js',
      'scripts/angular.min.js',
      'scripts/angular-route.min.js',
      'scripts/angular-resource.min.js',
      'scripts/angular-sanitize.min.js',
      'scripts/app.min.js',
    ],
    ie: [
      //'http://cdn.staticfile.org/html5shiv/r29/html5.min.js',
      //'http://cdn.staticfile.org/respond.js/1.4.2/respond.min.js',
      //'http://cdn.staticfile.org/json5/0.3.0/json5.min.js',

      'scripts/html5shiv.js',
      'scripts/respond.min.js',
      'scripts/json5.js',
    ],
  }
};
