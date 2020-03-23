import React from 'react'
import Img from 'gatsby-image'

import styles from '../sass/port-image.module.scss'

const PortImage = ({ port }) => {
  return (
    <div className={styles.container}>
      <a href={port.link} className={styles.link} target="_blank">
        <div className={styles.image}>{port.image}</div>
        <div styles={styles.overlay}>
          <h2 className={styles.title}>{port.title}</h2>
        </div>
      </a>
    </div>
  )
}

export default PortImage
