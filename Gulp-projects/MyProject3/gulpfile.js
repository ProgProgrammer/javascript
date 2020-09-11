'use strict';

var gulp = require('gulp')
var gp = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: 'build'
    });
    browserSync.watch('build/**/*.*')
        .on('change', browserSync.reload({
            stream: true
        }));
});

gulp.task('pug', function() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('less', function() {
    return gulp.src('src/static/css/main.less')
        .pipe(gp.less({}))
        .pipe(gp.autoprefixer('last 10 versions'))
        .on("error", gp.notify.onError({
            title: "Less"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/css/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'less'),
    gulp.parallel('watch', 'serve')
));