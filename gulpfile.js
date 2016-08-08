// npm install

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const del = require('del');
const plumber = require('gulp-plumber');
const glob = require("glob");

const dist_dir = 'dist';

const src_js_files = ['src/{utils,libs}/**/*.{js,es6}'];
const dist_js_dir = dist_dir;

const src_js_bin_files = 'src/bin/*';
const dist_js_bin_dir = 'dist/bin';

const src_sync_files = ['src/template/**/*','src/template/.*'];
const dist_sync_dir = 'dist/template';

gulp.task('clean', () => {
    return del(dist_dir);
});

gulp.task('sync', () => {
    return gulp.src(src_sync_files)
        .pipe(plumber())
        .pipe(changed(dist_sync_dir))
        .pipe(gulp.dest(dist_sync_dir));
});

gulp.task('build-js', () => {
    return gulp.src(src_js_files)
        .pipe(plumber())
        .pipe(changed(dist_js_dir))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist_js_dir));
});

gulp.task('build-js-bin', () => {
    return gulp.src(src_js_bin_files)
        .pipe(plumber())
        .pipe(changed(dist_js_bin_dir))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist_js_bin_dir));
});

gulp.task('watch', () => {
    gulp.watch(src_sync_files, ['sync']);
    gulp.watch(src_js_files, ['build-js']);
    gulp.watch(src_js_bin_files, ['build-js-bin']);
});

gulp.task('build', () => {
    return runSequence(['sync','build-js','build-js-bin']);
});

gulp.task('rebuild', () => {
    return runSequence('clean','build');
});
