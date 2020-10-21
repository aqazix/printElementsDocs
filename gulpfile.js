const babel = require("gulp-babel");
const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify-es").default;

sass.compiler = require("node-sass");

exports.default = () => {
    gulp.watch("./sass/*.sass", () => {
        return gulp.src("./sass/main.sass")
            .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
            .pipe(gulp.dest("./docs/"));
    });
    gulp.watch("./**/*.pug", () => {
        return gulp.src("./*.pug")
            .pipe(pug())
            .pipe(gulp.dest("./docs/"));
    });
    gulp.watch("./js/*.js", () => {
        return gulp.src("./js/main.js", { allowEmpty: true })
            .pipe(babel({ presets: ["@babel/preset-env"] }))
            .pipe(uglify())
            .pipe(gulp.dest("./docs/"));
    })
};