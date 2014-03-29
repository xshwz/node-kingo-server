module.exports = {
  info: function (req, res) {
    var menu    = sails.config.menu.common,
        student = null;

    if (req.session.student) {
      menu = _.union(sails.config.menu.student, menu);
      if (req.session.student.isAdmin) {
        menu = _.union(menu, sails.config.menu.admin);
      }

      var student = {
        sid: req.session.student.sid,
        fields: sails.config.student.fields
      }
    }

    res.send({
      student: student,
      menu: menu,
      wechat: sails.config.wechat,
      appName: sails.config.appName
    });
  },
  doLogin: function (req, res) {
    var kingo = new (require('kingo'))({baseUrl: sails.config.kingoUrl}),
        sid   = req.param('sid'),
        pwd   = req.param('pwd');

    kingo.login(sid, pwd, function (error, result) {
      if (result) {
        req.session.kingoSession = kingo.sessionId;

        Student.findOne({sid: sid}, function (error, student) {
          if (student) {
            student.loggedAt = new Date();
            student.save(function (error, student) {
              req.session.student = student;
              res.send({state: true});
            });
          } else {
            Student.create({
              sid: sid,
              loggedAt: new Date()
            }, function (error, student) {
              req.session.student = student;
              res.send({state: true});
            });
          }
        });
      } else {
        if (error && error.name == 'ConnectionTimeoutError') {
          res.send({state: false, error: 'timeout'});
        } else {
          res.send({state: false});
        }
      }
    });
  },
  checkLogin: function (req, res) {
    if (req.student) {
      res.send(true);
    } else {
      res.send(false);
    }
  },
  logout: function (req, res) {
    req.session.student = null;
    res.redirect('/app#/login');
  }
};
