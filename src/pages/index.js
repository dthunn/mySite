import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Title from '../components/Title'

import cards from '../constants/cards'

import styles from '../sass/index.module.scss'

const Index = ({ data }) => {
  console.log(data)

  return (
    <div>
      <Layout>
        <Header img={data.file.childImageSharp.fluid}>
          <Banner />
        </Header>
        <Title title="I Specialize In" />
        <h2 className={styles.specialize}>UI Development and Graphic Design</h2>
        <div className={styles.cards}>
          {cards.map((card, index) => {
            return <Card key={index} card={card} />
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Index

export const query = graphql`
  query {
    file(relativePath: { eq: "omaha.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
