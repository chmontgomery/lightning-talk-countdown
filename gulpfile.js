var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  server = livereload();

gulp.task('dev', ['watch'], function () {
  nodemon({ script: 'server.js', ext: 'html', ignore: ['bower_components/*', 'node_modules/*', 'public/*'] })
    .on('restart', function () {
      server.changed();
    });
});

gulp.task('watch', function () {
  gulp.watch(['./public/**/*.*']).on('change', function (file) {
    server.changed(file.path);
  });
});