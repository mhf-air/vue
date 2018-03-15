//

// "dev-watch": "watchify -vd --iw 'web/**' -e src/app.ts -o '> web/js/app.js'",
// "p-js": "NODE_ENV=production browserify -g envify -e src/app.js | uglifyjs -c -m > web/js/app.js",

const fs = require("fs")
const browserify = require("browserify")
const vueify = require("vueify")
const tsify = require("tsify")
const babelify = require("babelify")

browserify("src/app.ts")
  .plugin(tsify, { target: "es5" })
  .transform(babelify, {
    presets: ["env"],
    plugins: ["transform-object-rest-spread"],
  })
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("web/js/app.js"))
