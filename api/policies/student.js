module.exports = function(req, res, next) {
  if (req.session.authenticated) {
    return next();
  }

  res.view('public/login');
};
