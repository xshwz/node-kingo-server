var path = require('path'),
    glob = require('glob');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        expand: true,
        cwd: 'assets/',
        src: [
          'favicon.ico',
          'images/**/*.+(gif|jpg|png)',
          'scripts/**/*.js'
        ],
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
          'requirejs/require.js',
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
          '.tmp/public/scripts/json5.min.js': ['.tmp/public/scripts/json5.js'],
          '.tmp/public/scripts/require.min.js': ['.tmp/public/scripts/require.js']
        }
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
      screenshots: {
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
    requirejs: {
      compile: {
        options: {
          baseUrl: '.tmp/public/scripts/app',
          paths: {
            'lodash': '../lodash.min',
            'jquery': '../jquery.min',
            'twitter-bootstrap': '../bootstrap.min',
            'angular': '../angular.min',
            'angular-sanitize': '../angular-sanitize.min',
            'angular-route': '../angular-route.min',
            'angular-resource': '../angular-resource.min',
          },
          shim: {
            'jquery': {
              exports : 'jquery'
            },
            'lodash': {
              exports : '_'
            },
            'angular': {
              exports : 'angular'
            },
            'angular-sanitize': {
              deps:['angular']
            },
            'angular-route': {
              deps: ['angular']
            }
          },
          include: ['jquery', 'twitter-bootstrap'],
          name: 'main',
          out: '.tmp/public/scripts/app.js',
        }
      }
    },
    watch: {
      copy: {
        files: [
          'assets/images/**/*.+(gif|jpg|png)',
          'assets/scripts/**/*.js'
        ],
        tasks: ['copy:assets']
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('init', ['copy', 'image_resize']);
  grunt.registerTask('build', ['uglify', 'less', 'jade', 'requirejs']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('prod', ['build']);
};
