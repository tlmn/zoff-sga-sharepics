module.exports = {
  siteMetadata: {
    name: "Sharepic Generator – Seebrücke",
    title: "Sharepic Generator – Seebrücke",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seebrücke – Sharepic Generator`,
        short_name: `Seebrücke – Sharepic Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `static/assets/images/icon.png`,
      },
    },
  ],
};
