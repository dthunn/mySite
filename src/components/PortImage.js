import React from 'react'

import styles from '../sass/port-image.module.scss'

const PortImage = ({ port }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img src={port.image} className="img-cover" alt="quiz" />
      </div>
      <a href={port.link} className="link" target="_blank">
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category size">{port.text}</p>
            <h2 className="item-text-title">{port.title}</h2>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PortImage
