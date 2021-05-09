module.exports = {
  eleventyComputed: {
    ogImageUrl: data => `https://takanorip.com/teasers/${data.page.fileSlug}.png`
  }
};