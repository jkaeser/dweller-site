module.exports = {
  siteMetadata: {
    title: `Dweller`,
    description: `Philadelphia based rock band`,
    author: `John Kaeser`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffde9b`,
        theme_color: `#00036e`,
        display: `minimal-ui`,
        icon: `src/images/dweller-d.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};
