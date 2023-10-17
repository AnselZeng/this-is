module.exports = {
  siteMetadata: {
    title: "This Is Ansel",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        portalZIndex: undefined,
      },
    },
  ],
};
