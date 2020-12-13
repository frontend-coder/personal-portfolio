"use strict";
// npm i gulp --save-dev
const { src, dest, parallel, series, watch } = require('gulp');

const concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
const rigger = require('gulp-rigger');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');


const stripCssComments = require('gulp-strip-css-comments');
const cleancss = require('gulp-clean-css');
const strip = require('gulp-strip-comments');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


const browserSync = require('browser-sync').create();

function styles() {
  return src(['app/scss/libs.scss', 'app/scss/main.scss'])
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('libs.css'))
    .pipe(rename('libs.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}



function pinkstyles() {
  return src('app/scss/pink.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('pink.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}

function bluestyles() {
  return src('app/scss/blue.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('blue.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}

function orangestyles() {
  return src('app/scss/orange.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('orange.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}

function yellowstyles() {
  return src('app/scss/yellow.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('yellow.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}

function greenstyles() {
  return src('app/scss/green.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('green.css'))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        //			format: 'beautify'
        format: 'keep-breaks',
      })
    ) // Opt., comment out when debugging
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'));
}


function browsersync() {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false,
    online: false,
  });
}

function scripts() {
  return src(['app/libs/plagins/jquery.min.js', 'app/libs/common.js'])
    .pipe(strip())
    .pipe(rigger())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream());
}

function images() {
  return src('app/img/**/*').pipe(newer('dest/img/')).pipe(imagemin()).pipe(dest('dest/img/'));
}

function cleanimg() {
  return del('dist/img/');
}

function cleandest() {
  return del('dest/**/*', { force: true });
}

function startwatch() {
  watch('app/scss/*.scss', styles);
  watch('app/img/**/*.*').on('change', browserSync.reload);
  watch('app/**/*.html').on('change', browserSync.reload);
  watch('app/**/*.php').on('change', browserSync.reload);
  watch('app/css/*.css').on('change', browserSync.reload);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
}

function buildcopy() {
  return src(['app/css/**/*.min.css', 'app/js/**/*.min.js', 'app/*.html', 'app/*.php', 'app/**/ht.access'], { base: 'app' }).pipe(dest('dest'));
}

exports.pinkstyles = pinkstyles;
exports.bluestyles = bluestyles;
exports.orangestyles = orangestyles;
exports.yellowstyles = yellowstyles;
exports.greenstyles = greenstyles;



exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.cleandest = cleandest;
//  greenstyles, yellowstyles, orangestyles, bluestyles, pinkstyles,
exports.build = series(cleandest, styles, scripts, images, buildcopy);

exports.default = parallel(styles, greenstyles, yellowstyles, orangestyles, bluestyles, pinkstyles, scripts, browsersync, startwatch);
