import preprocess from 'svelte-preprocess';
// import { imagetools } from 'vite-imagetools';
// import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        sass: {
            includePaths: ["./src/styles", "./sources/src/styles", "./src/lib", "./sources/src/lib"],
            prependData: `@use "sass:math"\n@import '_prepend.sass'`,
            renderSync: true
        }
    }),
    kit: {
        // hydrate the <div id="app"> element in src/app.html
        target: '#app',

        // Static build
        // adapter: adapterStatic({
        // 	pages: './../html'
        // }),

        // Node build
        adapter: adapterNode({
            // out: './../build-node/'+Date.now()
        }),

        vite: () => ({
            logLevel: "info",
            // plugins: [
            // imagetools(),
            // ]
        })
    }
};

export default config;