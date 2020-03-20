import React from 'react'

import Layout from '../components/Layout'
import styles from '../sass/contact.module.scss'
import Title from '../components/Title'

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <Title title="Contact Me" />
        <h1>This is contact page</h1>
      </div>
    </Layout>
  )
}

export default Contact
