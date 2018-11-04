module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Tailwind',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `abel`,
          `roboto:400,400i,700,700i`
        ]
      }
    }
  ],
};
