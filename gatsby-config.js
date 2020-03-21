const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Dylan Thunn',
    description: 'My personal website with my work and how to reach me.',
    author: 'Dylan Thunn',
    twitterUserName: '@DylanThunn',
    image: '/dtsvg.svg',
    siteUrl: 'https://www.dthunn.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
