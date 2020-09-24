module.exports = function ()
{
    $.gulp.task('watch', function() {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/css/*.less', $.gulp.series('less'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series('scripts'));
    });
}