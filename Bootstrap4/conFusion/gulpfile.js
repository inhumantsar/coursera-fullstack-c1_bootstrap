'use strict';

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function () {
 return gulp.src('./css/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
 gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () {
  var files = [
     './*.html',
     './css/*.css',
     './img/*.{png,jpg,gif}',
     './js/*.js'
  ];

  browserSync.init(files, {
     server: {
        baseDir: "./"
     }
  });

});

// Default task
gulp.task('default', ['browser-sync'], function() {
   gulp.start('sass:watch');
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('copyfonts', function() {
   gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});
