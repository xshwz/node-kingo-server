define(['jquery'], function ($) {
  function sidebar() {
    this.$side_body = $('#side>ul');
    this.$side_header = $('#side-header');
    this.$body = $('#main');
    this.$body_content = $('#main > .container');
    this.$side = $('#side');
    this.$side_toggle = $('#side-toggle');
    this.screen_sm = 768;

    var self = this;

    this.resize();

    $(window).resize(function () {
      self.resize();
    });

    this.$side_toggle.on('click', function () {
      self.sideToggle();
    });
  }

  sidebar.prototype = {
    resize: function () {
      var height = $(window).height() - this.$side_header.height();

      this.$side_body.css('height', height);
      this.$body_content.css('height', height);
      
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
    },
    reset: function () {
      if (this.isOn()) {
        this.hideSidebar();
      }

      this.$body_content.scrollTop(0);
    }
  };

  return sidebar;
});
