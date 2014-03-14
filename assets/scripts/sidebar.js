function Sidebar() {
  this.$side_body = $('#side>ul');
  this.$side_header = $('#side-header');
  this.$body = $('#main');
  this.$side = $('#side');
  this.$side_toggle = $('#side-toggle');
  this.screen_sm = 768;

  var self = this;

  $(window).
    load(function () {
      self.resize();
    }).
    resize(function () {
      self.resize();
    });

  this.$side_toggle.on('click', function () {
    self.sideToggle();
  });
}

Sidebar.prototype = {
  resize: function () {
    this.$side_body.css(
      'height', $(window).height() - this.$side_header.height());
    this.$body.css('height', $(window).height());
    
    if (this.isOn()) {
      if ($(window).width() > this.screen_sm) {
        this.$body.css('left', 0);
        this.$side.css('left', 'null');
        this.$side_toggle.removeClass('on');
      }
    } else {
      if ($(window).width() > this.screen_sm) {
        this.$side.css('left', 'null');
      }
    }
  },
  hideSidebar: function () {
    this.$body.css('left', 0);
    this.$side.css('left', -200);
    this.$side_toggle.removeClass('on');
  },
  showSidebar: function () {
    this.$body.css('left', 200);
    this.$side.css('left', 0);
    this.$side_body.focus();
    this.$side_toggle.addClass('on');
  },
  sideToggle: function () {
    if (this.isOn()) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  },
  isOn: function () {
    return this.$side_toggle.hasClass('on');
  }
};
