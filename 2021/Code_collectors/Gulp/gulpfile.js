var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browser_sync = require('browser-sync').create();

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
    gulp.watch('./**/*.js', browser_reload);
    gulp.watch('./**/*.php', browser_reload);
}

gulp.task('default', gulp.parallel(watch_scss, sync));