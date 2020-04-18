import React from 'react'

import styles from '../sass/port-image.module.scss'

const PortImage = ({ port }) => {
  return (
    <div className={styles.container}>
      <a href={port.link} className={styles.link} target="_blank">
        <div className={styles.image}>{port.image}</div>
        <div styles={styles.overlay}>
          <h2 className={styles.title}>{port.title}</h2>
          <h3 className={styles.text}>{port.text}</h3>
        </div>
      </a>
    </div>
  )
}

export default PortImage
