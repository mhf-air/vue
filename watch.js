//

// "dev-watch": "watchify -vd --iw 'web/**' -e src/app.ts -o '> web/js/app.js'",
// "p-js": "NODE_ENV=production browserify -g envify -e src/app.js | uglifyjs -c -m > web/js/app.js",

const fs = require("fs")
const browserify = require("browserify")
const typescript = require("typescript")

browserify("src/app.ts")
  .plugin("tsify")
  /* .transform("babelify", {
    presets: ["env"],
    plugins: ["transform-object-rest-spread"],
    extensions: [".ts"],
  }) */
  .transform("vueify", {
    customCompilers: {
      ts: function(content, cb, compiler, filePath) {
        let result = typescript.transpileModule(content, {
          compilerOptions: {
            module: typescript.ModuleKind.CommonJS
          }
        })
        cb(null, result.outputText)
      }
    }
  })
  .bundle()
  .pipe(fs.createWriteStream("web/js/app.js"))
