module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        cwd: 'assets/',
        src: ['favicon.ico', 'images/**/*'],
        dest: '.tmp/public/'
      }
    },
    uglify: {
      build: {
        files: {
          '<%= copy.main.dest %>scripts/app.js': ['assets/scripts/**/*.js']
        }
      }
    },
    less: {
      options: {
        cleancss: true
      },
      build: {
        files: {
          '<%= copy.main.dest %>styles/style.css': ['assets/styles/style.less']
        }
      }
    },
    jade: {
      build: {
        files: require('fs').readdirSync('assets/views/').reduce(
          function (files, file) {
            var fileName = file.split('.')[0];

            if (file.substr(-5) == '.jade') {
              files['<%= copy.main.dest %>views/' + fileName + '.html'] =
                'assets/views/' + fileName + '.jade';
            }

            return files;
          }, {}
        )
      }
    },
    watch: {
      copy: {
        files: ['images/**/*'],
        tasks: ['copy']
      },
      uglify: {
        files: ['assets/scripts/**/*.js'],
        tasks: ['uglify']
      },
      less: {
        files: ['assets/styles/**/*.less'],
        tasks: ['less']
      },
      jade: {
        files: ['assets/views/*.jade'],
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy', 'uglify', 'less', 'jade']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('prod', ['build']);
};
