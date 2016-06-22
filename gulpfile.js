var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('dev', function() {
   connect.server({
      root: './',
      livereload: true,
      port: 8080,
      host: 'localhost'
   });
});

gulp.task('reload', function() {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
   gulp.src(['./styles/*.scss', './styles/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.*','./views/*.*', './scripts/**/*.js', './styles/*.scss'], ['reload', 'sass']);
});

gulp.task('default', ['dev','watch']);
