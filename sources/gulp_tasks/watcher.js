import gulp from "gulp";
import { spawnSync } from "child_process";

const build = () => 
    new Promise((res, rej) => {
        const b = spawnSync( 'pnpm', [ 'run', 'build' ] );
        // console.log( `stderr: ${ b.stderr.toString() }` );
        // console.log( `stdout: ${ b.stdout.toString() }` );
        res();
    });


gulp.task("watcher", () =>
    new Promise((res, rej) => {
        gulp.watch(["./src/images/**/*", "!./src/images/sprite-*/**/*", "!./src/images/favicons/**/*"], gulp.series("images"));
        gulp.watch("./src/images/sprite-svg/*.svg", gulp.series("sprite"));
        gulp.watch("./src/**/*.svelte", { delay: 1000 }, build);
        res();
    })
);