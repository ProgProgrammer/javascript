module.exports = function ()
{
    $.gulp.task('less', function() {
        return $.gulp.src('src/static/css/main.less')
            .pipe($.gp.less({
                'include css':true
            }))
            .pipe($.gp.autoprefixer('last 10 versions'))
            .on("error", $.gp.notify.onError({
                title: "Less"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'));
    });
}