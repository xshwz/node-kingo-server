var load = require('./load');

module.exports = {
  index: function (req, res) {
    res.send('hello');
  },
  archives: function (req, res) {
    var student = req.session.student;

    if (student.archives) {
      res.send(student.archives);
    } else {
      load.student(req, function (error, student) {
        var kingo    = load.kingo(req),
            archives = {};

        kingo.getArchives(function (error, _archives) {
          _.merge(archives, _archives);
          kingo.getArchivesFromGradeExam(function (error, _archives) {
            _.merge(archives, _archives);
            kingo.getRegistrations(function (error, registrations) {
              _.merge(archives, registrations.pop());
              res.send(archives);
              student.archives = archives;
              student.save(function () {});
            });
          });
        });
      });
    }
  }
};
