module.exports = function (kingo, callback) {
  var archives = {};

  kingo.getArchives(function (error, _archives) {
    _.merge(archives, _archives);
    kingo.getArchivesFromGradeExam(function (error, _archives) {
      _.merge(archives, _archives);
      kingo.getRegistrations(function (error, registrations) {
        callback(error, _.merge(archives, registrations.pop()));
      });
    });
  });
};
