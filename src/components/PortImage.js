import React from 'react'

import styles from '../sass/port-image.module.scss'

const PortImage = ({ port }) => {
  return (
    <div className={styles.container}>
      <a href={port.link} className={styles.link}>
        <img src={port.image} className={styles.image} alt={port.alt} />
        <h1 className={styles.title}>{port.title}</h1>
      </a>
    </div>
  )
}

export default PortImage
