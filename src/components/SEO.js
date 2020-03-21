import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        image
        twitterUserName
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const { siteUrl, image, twiiterUserName } = site.siteMetadata
  const metaTitle = site.siteMetadata.title
  const metaDesc = site.siteMetadata.description

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${metaTitle}`}>
      <meta name="description" content={description || metaDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
