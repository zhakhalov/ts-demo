var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('compile-client', function () {
  
  var tsProject = ts.createProject('public/tsconfig.json', { sortOutput: true });
  
  return tsProject
  .src()
  .pipe(sourcemaps.init())
  .pipe(ts(tsProject))
  .js
  .pipe(concat('dest/js/app.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/'));
});

gulp.task('compile-server', function () {
  
  var tsProject = ts.createProject('tsconfig.json');
  
  return tsProject
  .src()
  .pipe(sourcemaps.init())
  .pipe(ts(tsProject))
  .pipe(sourcemaps.write('.', {
    sourceRoot: '../',
    rootDir: '../',
    includeContent: false,
  }))
  .pipe(gulp.dest('out'));
});

gulp.task('build', ['compile-server', 'compile-client']);