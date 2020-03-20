import React from 'react'

import styles from '../sass/card.module.scss'

const Card = ({ card }) => {
  return (
    <article>
      <div className={styles.icon}>{card.icon}</div>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.text}>{card.text}</div>
    </article>
  )
}

export default Card
