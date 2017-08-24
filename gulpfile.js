'use strict';

let path = require('path');

let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');
let plugins = gulpLoadPlugins();

let root = './themes/drupal8ls/';

gulp.task('less', function () {
    return gulp.src(root + 'less/**/*.less')
        .pipe(plugins.less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }).on('error', function(e) { this.emit('end'); console.log(e); }))
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.autoprefixer({
            browsers: [
                'last 3 versions',
                'iOS >= 8',
                'Safari >= 8'
            ],
            cascade: false
        }).on('error', function(e) { this.emit('end'); console.log(e); }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(root + 'css'));
});

gulp.task('watch', function() {
    gulp.watch(root + 'less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less', 'watch']); // Default will run the 'entry' watch task
