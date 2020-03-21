import React from 'react'
import { Link } from 'gatsby'
import links from '../constants/links'

import styles from '../sass/footer.module.scss'
import socials from '../constants/socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Dylan Thunn {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
