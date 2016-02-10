/**
 * Created by Oleksandr Tserkovnyi on 27.07.15.
 */

var gulp = require('gulp');

gulp.task('build:js', function () {
  return gulp.src('./bower_components/angular-ui-notification/dist/angular-ui-notification.min.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:css', function () {
  return gulp.src('./bower_components/angular-ui-notification/dist/angular-ui-notification.min.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build:js', 'build:css']);