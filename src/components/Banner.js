import React from 'react'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect'

import styles from '../sass/banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.typeWriter}>
      <h1 className={styles.name}>Dylan Thunn</h1>
      <Typewriter
        options={{
          strings: ['UI Developer', 'Graphic Designer'],
          autoStart: true,
          loop: true,
        }}
        onInit={typewriter => {
          typewriter
            // .typeString('Hello World!')
            .callFunction(() => {
              console.log('String typed out!')
            })
            .pauseFor(2500)
            // .deleteAll()
            .deleteChars(2)
            .callFunction(() => {
              console.log('All strings were deleted')
            })
            .start()
        }}
      />
      <Link fade to="/work" className="btn-white">
        My Work
      </Link>
    </div>
  )
}

export default Banner
