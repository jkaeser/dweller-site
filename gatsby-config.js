module.exports = {
  siteMetadata: {
    title: `Dweller`,
    description: `Dweller is a rock band from Philadelpha, PA.`,
    author: `John Kaeser`
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dweller`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#fcfcf9`,
        display: `minimal-ui`,
        icon: `src/images/dweller-d.png`
      }
    }
  ]
};
