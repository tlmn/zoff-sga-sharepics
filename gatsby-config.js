module.exports = {
  siteMetadata: {
    name: 'Sharepic Generator – Solidarisch geht anders',
    title: 'Sharepic Generator – Solidarisch geht anders',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Solidarisch geht anders – Sharepic Generator`,
        short_name: `Solidarisch geht anders – Sharepic Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `static/assets/images/icon.png`,
      },
    },
  ],
}
