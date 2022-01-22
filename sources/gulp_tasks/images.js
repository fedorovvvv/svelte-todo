import gulp from "gulp";
import newer from "gulp-newer";
import debug from "gulp-debug";
import webp from "gulp-webp";
import imagemin, { gifsicle, optipng, svgo } from 'gulp-imagemin';
import pngquant from "imagemin-pngquant";
import imageminJpegRecompress from "imagemin-jpeg-recompress";

gulp.task("images_skip", () =>
    // Just direct copying
    gulp.src("./src/images/skip-optimization/**/*")
        .pipe(newer("./"+$.path.dest+"images/"))
        .pipe(gulp.dest("./"+$.path.dest+"images/"))
        .pipe(debug({ "title": "Skipped" }))
);
gulp.task("images_webp", () =>
    // WebP optimization
    gulp.src(["./src/images/**/*",
        "!./src/images/**/*.svg",
        "!./src/images/skip-optimization",
        "!./src/images/skip-optimization/**/*",
        "!./src/images/sprite-*",
        "!./src/images/sprite-*/**/*",
        "!./src/images/favicons",
        "!./src/images/favicons/**/*"])
        .pipe(newer({dest: "./"+$.path.dest+"images/", ext: ".webp"}))
        .pipe(webp({quality: 85}))
        .pipe(gulp.dest("./"+$.path.dest+"images/"))
        .pipe(debug({ "title": "WebP" }))
);
gulp.task("images_imagemin", () =>
    // Standart optimization
    gulp.src(["./src/images/**/*",
                "!./src/images/**/*.webp",
                "!./src/images/skip-optimization",
                "!./src/images/skip-optimization/**/*",
                "!./src/images/sprite-*",
                "!./src/images/sprite-*/**/*",
                "!./src/images/favicons",
                "!./src/images/favicons/**/*"])
        .pipe(newer("./"+$.path.dest+"images/"))
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            imageminJpegRecompress({
                progressive: true,
                accurate: true,
                subsample: "disable",
                max: 80,
                min: 70
            }),
            svgo({
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                // customize options for plugins included in preset
                                // builtinPluginName: {
                                //     optionName: 'optionValue',
                                // },
                                // or disable plugins
                                removeViewBox: false,
                            },
                        },
                    },
                    // Enable builtin plugin not included in preset
                    'convertStyleToAttrs',
                    // Enable and configure builtin plugin not included in preset
                    // {
                    //     name: 'manyBuiltInPlugin',
                    //     params: {
                    //         optionName: 'value',
                    //     },
                    // }
                ]
            }),
            optipng({optimizationLevel: 1}),
            pngquant({quality: [0.6, 0.95], speed: 3})
        ]))
        .pipe(gulp.dest("./"+$.path.dest+"images/"))
        .pipe(debug({"title": "Raster"}))
);

gulp.task("images", gulp.parallel("images_skip", "images_webp", "images_imagemin"));
