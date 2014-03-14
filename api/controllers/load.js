exports.kingo = function (req) {
  return new (require('kingo'))({
    baseUrl: sails.config.kingoUrl
  }, req.session.kingoSession);
};

exports.student = function (req, callback) {
  Student.findOne({sid: req.session.student.sid}, callback);
};
