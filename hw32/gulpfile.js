//gulp
const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync").create();

const styles = () => {
  return src("src/scss/main.scss")
    .pipe(concat("main.min.css"))
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(dest("public/css"))
    .pipe(browserSync.stream());
};
// module.exports.styles = styles;

//webpack for gulp (work with js) webpack-stream
const scripts = () => {
  return src("src/js/main.js")
    .pipe(
      webpack({
        devtool: "source-map",
        mode: "development",
        output: {
          filename: "main.min.js",
        },
      })
    )
    .pipe(dest("public/js"))
    .pipe(browserSync.stream());
};
// module.exports.scripts = scripts;

const watching = () => {
  watch(["src/scss/main.scss"]);
  watch(["src/js/*.js"]);
  watch("src/*.html").on("change", browserSync.reload);
};

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
};

module.exports.default = parallel(styles, scripts, browsersync, watching);
