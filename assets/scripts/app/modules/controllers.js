define([
  'angular',
  'controllers/login',
  'controllers/logout',
  'controllers/effective_scores',
  'controllers/original_scores'
], function (
  app,
  login,
  logout,
  effective_scores,
  original_scores
) {
  angular.module('controllers', [])
    .controller('login', login)
    .controller('logout', logout)
    .controller('effective_scores', effective_scores)
    .controller('original_scores', original_scores);
});
