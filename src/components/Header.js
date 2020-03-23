import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Header = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home} alt="Omaha">
      {children}
    </BackgroundImage>
  )
}

export default styled(Header)`
  height: calc(100vh - 3rem);
  background: linear-gradient(
    to right bottom,
    rgba(34, 139, 180, 0.8),
    rgba(2, 65, 124, 0.9)
  );
  background-position: top;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
