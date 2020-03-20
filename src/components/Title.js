import React from 'react'

import styles from '../sass/title.module.scss'

const Title = ({ title }) => {
  return (
    <>
      <h1 className={styles.header}>{title}</h1>
      <div class={styles.bottomLine}></div>
    </>
  )
}

export default Title
