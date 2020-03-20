import React from 'react'

import Layout from '../components/Layout'
import PortImage from '../components/PortImage'
import portfolio from '../constants/portfolio'
import Title from '../components/Title'

import styles from '../sass/work.module.scss'

const Work = () => {
  return (
    <Layout>
      <div className={styles.work}>
        <Title title="My Work" />
        <div className={styles.workContainer}>
          {portfolio.map((port, index) => {
            return <PortImage key={index} port={port} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Work
