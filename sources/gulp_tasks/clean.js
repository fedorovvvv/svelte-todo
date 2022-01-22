import gulp from "gulp";
import clean from "gulp-clean";
import debug from "gulp-debug";

gulp.task("clean", () =>
    gulp.src($.path.dest+"images/*", {read: false})
        .pipe(clean({force: true}))
        .pipe(debug({"title": "clean"}))
)