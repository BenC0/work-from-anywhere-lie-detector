const postCss = require("postcss");
const postcssExtendRule = require('postcss-extend-rule');
const cssnano = require('cssnano');
const litePreset = require('cssnano-preset-lite');
const preset = litePreset({ discardComments: true });

module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
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
      .process(cssCode)
      .then(
        r => done(null, r.css),
        e => done(e, null)
      )
    })
    eleventyConfig.addWatchTarget("src/**/*.css");
    return {
      passthroughFileCopy: true,
      markdownTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };