import React from 'react'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect'

import styles from '../sass/banner404.module.scss'

const Banner = () => {
  return (
    <div className={styles.typeWriter}>
      <h1 className={styles.name}>This page Does not exist</h1>
      <Typewriter
        options={{
          strings: [
            'Not a page.',
            'Exit whenever',
            'Still here?',
            'You are clearly not busy.',
          ],
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
        Return Home
      </Link>
    </div>
  )
}

export default Banner
