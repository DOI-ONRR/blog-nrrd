const uswds = require("@uswds/compile");
const gulp = require('gulp');

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 */
uswds.paths.src.projectSass = './src/sass';
uswds.paths.dist.css = "./uswds/assets/css";
uswds.paths.dist.theme = "./src/sass";
uswds.paths.dist.img = "./uswds/assets/img";
uswds.paths.dist.fonts = "./uswds/assets/fonts";
uswds.paths.dist.js = "./public/assets/js";

/**
 * Exports
 */

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.updateUswds = uswds.updateUswds;
exports.copyAssets = uswds.copyAssets;
exports.default = uswds.watch;

/**
 * ONRR tasks
 */

gulp.task('onrrCopyImg', function() {
    return gulp.src('./node_modules/@uswds/uswds/dist/img/**/*')
    .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('onrrCopyFonts', function() {
    return gulp.src('./node_modules/@uswds/uswds/dist/fonts/**/*')
    .pipe(gulp.dest('./public/assets/fonts'));
});

gulp.task('onrrPostGatsbyBuild', gulp.series('onrrCopyImg', 'onrrCopyFonts'));