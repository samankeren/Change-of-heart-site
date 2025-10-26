module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "/" });
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      // ⬅️ remove `layouts: "_includes/layouts",`
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
