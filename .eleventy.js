const postCss = require("postcss");
const postcssExtendRule = require('postcss-extend-rule');
const cssnano = require('cssnano');
const litePreset = require('cssnano-preset-lite');
const preset = litePreset({ discardComments: true });
const fs = require('fs')
const path = require('path')

function mk(f) {
  fs.mkdir(path.join(__dirname, f), {recursive: true}, e => {
    if (e) throw e
  })
}

async function processJS() {
  fs.readFile('src/js/script.js', (err, js) => {
    fs.writeFile('dist/js/script.js', js, () => true)
  })
}

async function processCSS() {
  fs.readFile('src/css/index.css', (err, css) => {
    postCss([
      require('postcss-nested'),
      require('postcss-import'),
      postcssExtendRule({
        name: "extend",
        onFunctionalSelector: 'remove'
      }),
      cssnano({
        preset
      }),
    ])
    .process(css, { from: 'src/css/index.css', to: 'dist/css/index.css' })
    .then(result => {
      fs.writeFile('dist/css/index.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dist/css/index.css.map', result.map.toString(), () => true)
      }
    })
  })
}

module.exports = function(eleventyConfig) {
    // Return your Object options:
    mk('./dist/js/')
    mk('./dist/css/')

    eleventyConfig.on('afterBuild', () => {
      processJS()
      processCSS()
    });

    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");

    return {
      passthroughFileCopy: true,
      markdownTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };