var glob        = require('glob'),
    path        = require('path'),
    kingo       = require('kingo'),
    actionsPath = path.dirname(__dirname) +  '/actions/student/',
    controller  = {};

glob.sync(actionsPath + '*.js').forEach(function (file) {
  var actionName = path.basename(file).replace('.js', '');

  controller[actionName] = function (req, res) {
    Student.findOne({sid: req.session.student.sid}, function (error, student) {
      if (req.method == 'GET' && student[actionName]) {
        res.send(student[actionName]);
      } else {
        var _kingo = new kingo({
              baseUrl: sails.config.kingoUrl}, req.session.kingoSession);

        require(file)(_kingo, function (error, data) {
          student[actionName] = data;
          student.save(function () {});
          res.send(data);
        });
      }
    });
  };
});

module.exports = controller;
