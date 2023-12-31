/**
 * @type {import('gatsby').GatsbyConfig}
 */
// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: `The Changers`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-eslint'],
};
