var gulp = require('gulp');
var mocha = require('gulp-mocha');
var notifierReporter = require('mocha-notifier-reporter');
var istanbul = require('gulp-istanbul');

notifierReporter.icon_pass = __dirname + '/img/success.png';
notifierReporter.icon_fail = __dirname + '/img/fail.png';
notifierReporter.message_pass = 'Congratulations. You are better than everyone.';
notifierReporter.message_fail = 'The cake is a lie.';

gulp.task('coverage', function () {
  return gulp.src('src/**/*.js')
    .pipe(istanbul({includeUntested: true}))
    .on('finish', function () {
      gulp.src('test/**/*.spec.js')
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 75 } }));
    });
});

gulp.task('test', function() {
  gulp.src(['test/**/*.spec.js'])
    .pipe(mocha({
      options: 'tdd',
      reporter: notifierReporter.decorate('spec')
    }));
});

gulp.task('tdd', ['test'], function() {
  return gulp.watch(['test/**/*.spec.js', 'src/**/*.js'], ['test']);
});

gulp.task('default', ['tdd']);