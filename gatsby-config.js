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
        background_color: `#ffde9b`,
        theme_color: `#00036e`,
        display: `minimal-ui`,
        icon: `src/images/dweller-d.png`
      }
    }
  ]
};
