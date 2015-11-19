module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      js: {
        files: 'src/**/*.js',
        tasks: ['uglify'],
        options: {
          livereload: true
        },
      },
      html:{
        files: '*.html',
        // tasks: ['uglify'],
        options: {
          livereload: true
        },
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          // onCreateServer: function(server, connect, options) {
          //   var io = require('socket.io').listen(server);
          //   io.sockets.on('connection', function(socket) {
          //     // do something with socket
          //   });
          // }
        }
      }
    }
 });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).
  grunt.registerTask('default', ['uglify','connect','watch']);

};