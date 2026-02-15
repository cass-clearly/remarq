const esbuild = require("esbuild");

const watch = process.argv.includes("--watch");

const buildOptions = {
  entryPoints: ["src/index.js"],
  bundle: true,
  format: "iife",
  globalName: "FeedbackLayer",
  outfile: "dist/feedback-layer.js",
  minify: !watch,
  sourcemap: watch,
  target: ["es2020"],
};

if (watch) {
  esbuild.context(buildOptions).then((ctx) => {
    ctx.watch();
    console.log("Watching for changes...");
  });
} else {
  esbuild.build(buildOptions).then(() => {
    console.log("Built dist/feedback-layer.js");
  });
}
