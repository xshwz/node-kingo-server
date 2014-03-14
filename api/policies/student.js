module.exports = function(req, res, next) {
  if (req.session.student) {
    return next();
  }

  res.send(403);
};
