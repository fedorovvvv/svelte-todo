import gulp from "gulp";
import favicons from "gulp-favicons";
import newer from "gulp-newer";
import debug from "gulp-debug";

gulp.task("favicons_folder", () =>
    gulp.src("./src/images/favicons/*.{jpg,jpeg,png,gif}")
        .pipe(favicons({
            path: "./",
            appName: "",
            appShortName: "",
            appDescription: "",
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: true,
                firefox: false,
                yandex: true,
                windows: true,
                coast: false
            }
        }))
        .pipe(gulp.dest($.path.dest+"images/favicons/"))
);
gulp.task("favicon_main", () =>
    // Just direct copying
    gulp.src($.path.dest+"images/favicons/favicon.ico")
        .pipe(newer("./"+$.path.dest+"/"))
        .pipe(gulp.dest("./"+$.path.dest+"/"))
        .pipe(debug({ "title": "Favicons" }))
);
gulp.task("favicons", gulp.series("favicons_folder", "favicon_main"));
