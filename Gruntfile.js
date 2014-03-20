var path = require('path'),
    glob = require('glob');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      images: {
        expand: true,
        cwd: 'assets/',
        src: ['favicon.ico', 'images/**/*'],
        dest: '.tmp/public/'
      },
      flat_ui_icons: {
        flatten: true,
        expand: true,
        src: ['bower_components/flat-ui-official/images/icons/png/*.png'],
        dest: '.tmp/public/images/icons/'
      },
      scripts: {
        flatten: true,
        expand: true,
        cwd: 'bower_components/',
        src: [
          'jquery/dist/jquery.min.js',
          'jquery/dist/jquery.min.map',
          'bootstrap/dist/js/bootstrap.min.js',
          'html5shiv/dist/html5shiv.js',
          'respond/dest/respond.min.js',
          'json5/lib/json5.js',
          'lodash/dist/lodash.min.js',
          'angular/angular.min.js',
          'angular/angular.min.js.map',
          'angular-resource/angular-resource.min.js',
          'angular-resource/angular-resource.min.js.map',
          'angular-route/angular-route.min.js',
          'angular-route/angular-route.min.js.map',
          'angular-sanitize/angular-sanitize.min.js',
          'angular-sanitize/angular-sanitize.min.js.map',
        ],
        dest: '.tmp/public/scripts/'
      },
      less: {
        flatten: true,
        expand: true,
        src: ['bower_components/bootstrap/less/*.less'],
        dest: 'assets/styles/bootstrap/'
      },
      fonts: {
        flatten: true,
        expand: true,
        src: ['bower_components/bootstrap/fonts/*'],
        dest: '.tmp/public/fonts/'
      }
    },
    uglify: {
      build: {
        files: {
          '.tmp/public/scripts/app.min.js': ['.tmp/public/scripts/app.js']
        }
      }
    },
    concat: {
      build: {
        src: ['assets/scripts/**/*.js'],
        dest: '.tmp/public/scripts/app.js'
      }
    },
    less: {
      options: {
        cleancss: true
      },
      build: {
        files: {
          '.tmp/public/styles/style.css': ['assets/styles/style.less']
        }
      }
    },
    jade: {
      build: {
        files: glob.sync('assets/views/**/*.jade').reduce(
          function (files, file) {
            files[
              '.tmp/public/views' +
              file.replace(/(assets\/views)|(.jade)/g, '') +
              '.html'] = file;
            return files;
          }, {}
        )
      }
    },
    image_resize: {
      wechat_screenshots: {
        options: {
          width: 160
        },
        files: glob.sync('assets/images/wechat-screenshots/*.png').reduce(
          function (files, file) {
            files[
              '.tmp/public/images/wechat-screenshots/thumbnails/' +
              path.basename(file)] = file;
            return files;
          }, {}
        )
      }
    },
    watch: {
      copy: {
        files: ['images/**/*'],
        tasks: ['copy:images']
      },
      scripts: {
        files: ['assets/scripts/**/*.js'],
        tasks: ['concat', 'uglify']
      },
      less: {
        files: ['assets/styles/**/*.less'],
        tasks: ['less']
      },
      jade: {
        files: ['assets/views/**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('init', ['copy', 'image_resize']);
  grunt.registerTask('build', ['concat', 'uglify', 'less', 'jade']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('prod', ['build']);
};
