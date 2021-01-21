const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browser_sync = require('browser-sync').create();
const gulp_webpack = require('gulp-webpack');
const webpack = require('webpack');
const webpack_config = require('./webpack.config.js');

function css_style(done)
{
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass( {
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browser_sync.stream());
    done();
}

function scripts(done) {
    gulp.src('./js/**/*.js')
        .pipe(gulp_webpack(webpack_config, webpack))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./dist_scripts/'))
        .pipe(browser_sync.stream());
    done();
}

function sync(done)
{
    browser_sync.init(
    {
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browser_reload(done)
{
    browser_sync.reload();
    done();
}

function watch_scss()
{
    gulp.watch('./scss/**/*.scss', css_style);
    gulp.watch('./**/*.html', browser_reload);
    gulp.watch('./js/**/*.js', scripts);
    gulp.watch('./**/*.php', browser_reload);
}

gulp.task('default', gulp.parallel(watch_scss, scripts, sync));