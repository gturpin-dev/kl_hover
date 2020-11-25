// npm i gulp gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-uglify-es gulp-concat pump
///////////////
// Variables //
///////////////
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify-es").default,
  concat = require("gulp-concat"),
  pump = require("pump"),
  uncss = require('gulp-uncss');

var style_sources = "assets/src/scss/main.scss",
  style_target = "assets/dist/css";

var script_sources = "assets/src/js/**/*.js",
  script_target = "assets/dist/js";

///////////
// Tasks //
///////////

function css() {
  return gulp
    .src(style_sources)
    .pipe(sourcemaps.init())
    .pipe(concat("main.css"))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(uncss({
      html: ['index.html', 'posts/**/*.html', 'http://example.com']
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(style_target));
}

function js() {
  return pump(
    [
      gulp.src(script_sources),
      sourcemaps.init(),
      concat("script.min.js"),
      uglify(),
      sourcemaps.write(),
      gulp.dest(script_target)
    ]
  );
}

function watch() {
  gulp.watch(["assets/src/scss/**/*.scss", style_sources], css);
  gulp.watch(script_sources, js);
}

/////////////////////
// Default - Build //
/////////////////////
const build = gulp.parallel(css, js);

///////////
// Tasks //
///////////
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;
