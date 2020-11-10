module.exports = {
  siteMetadata: {
    name: "Sharepic Generator – linksjugend ['solid]",
    title: "Sharepic Generator – linksjugend ['solid]",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `linksjugend ['solid] – Sharepic Generator`,
        short_name: `linksjugend ['solid] – Sharepic Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
  ],
};
