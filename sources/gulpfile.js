import gulp from "gulp";

import "./gulp_tasks/clean.js";
import "./gulp_tasks/favicons.js";
import "./gulp_tasks/sprite.js";
import "./gulp_tasks/images.js";
import "./gulp_tasks/watcher.js";

global.$ = {
    path: {
        dest: 'static/' // or just 'html/', 'dest/' — for current folder. WARNING: This directory will be cleaned at build!
    }
};

// BUILD
gulp.task("build", gulp.series("clean", "sprite",
    gulp.parallel("images", "favicons")
));

// Default
gulp.task("default", gulp.series("build", "watcher"));

