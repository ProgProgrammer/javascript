const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browser_sync = require('browser-sync').create();
const gulp_webpack = require('gulp-webpack');
const webpack = require('webpack');
const webpack_config = require('./webpack.config.js');
const pug = require('gulp-pug');
const babel = require('gulp-babel');

function css_style(done)
{
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass( {
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browser_sync.stream());
    done();
}

function scripts(done) {
    gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(babel({
            presents: ['es2015']
        }))
        .pipe(gulp_webpack(webpack_config, webpack))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(browser_sync.stream());
    done();
}

function pug_html(done)
{
    gulp.src('./src/templates/**/*.pug')
        .pipe(pug(
 {
            pretty: false
        }
        ))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./dist/'))
        .pipe(browser_sync.stream());
    done();
}

function sync(done)
{
    browser_sync.init(
    {
        server: {
            baseDir: "./dist/"
        },
        port: 3000,
        notify: false
    });
    done();
}

function browser_reload(done)
{
    browser_sync.reload();
    done();
}

function watch_files()
{
    gulp.watch('./src/scss/**/*.scss', css_style);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/templates/**/*.pug', pug_html);
    gulp.watch('./**/*.php', browser_reload);
}

gulp.task('default', gulp.parallel(watch_files, css_style, scripts, pug_html, sync));