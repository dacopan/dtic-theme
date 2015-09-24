var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var rimraf = require('rimraf');



var paths = {
    less: ['./resources/assets/less/dtictheme.less'],
    js: ['./resources/assets/js/*.js', './resources/assets/js/**/*.js'],
    dist: {
        css: './resources/primefaces-dtic_theme/',
        js: './resources/primefaces-dtic_theme/js'
    },
    test: ['./js/tests/**.js']
};

/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function () {
    rimraf.sync(paths.dist.css + 'theme.css');
    rimraf.sync(paths.dist.js);
});

/**
 * compiles less files into css.
 */
gulp.task('less', function () {
    gulp.src(paths.less)
            .pipe(plugins.concat('theme.css'))
            .pipe(plugins.less())
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest(paths.dist.css));
});


gulp.task('js', function () {
    gulp.src(paths.js)
            .pipe(plugins.concat('dt1ctheme.js'))
            .pipe(plugins.uglify({mangle: false}))
            .pipe(gulp.dest(paths.dist.js));
});


/**
 * optimizes the output in terms of minification and concatenation.
 */
gulp.task('dist', function () {
    // add some optimizations (?)
});



gulp.task('build', ['clean', 'less', 'js', 'dist']);

gulp.task('default', ['build']);