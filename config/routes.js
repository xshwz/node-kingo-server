module.exports.routes = {
  '/': {
    view: 'intro'
  },
  '/app': {
    view: 'app'
  },
  'get /login': {
    controller: 'app',
    action: 'checkLogin'
  },
  'post /login': {
    controller: 'app',
    action: 'doLogin'
  },
  '/logout': {
    controller: 'app',
    action: 'logout'
  },
  '/api/archives': {
    controller: 'student',
    action: 'archives'
  }
};
