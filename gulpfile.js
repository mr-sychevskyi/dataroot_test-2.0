"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    fileinclude = require('gulp-file-include');


// sass
gulp.task('sass', function () {
  return gulp.src('src/style/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/dist'))
});

// watch
gulp.task('watch', function () {
    gulp.watch('src/style/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
});

// default
gulp.task('default', ['sass', 'watch']);



//// include
//gulp.task('include', function() {
//  gulp.src(['src/build/*.html'])
//    .pipe(fileinclude({
//      prefix: '@@',
//      basepath: '@file',
//      context: {
//        foo: true
//        }
//    }))
//    .pipe(gulp.dest('src'));
//});
                 
//// img
//gulp.task('imagemin', function () {
//   return gulp.src('src/img/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('src/img'))
//});

//// js
//gulp.task('jsmin', function (cb) {
//  pump([
//        gulp.src('src/js/*.js'),
//        uglify(),
//        gulp.dest('src/js')
//    ],
//    cb
//  );
//});

//// production
//gulp.task('production', ['include', 'sass', 'imagemin', 'jsmin']);