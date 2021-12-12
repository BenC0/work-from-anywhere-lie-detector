const postCss = require("postcss");

module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
      postCss([
        require('postcss-nested'),
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