import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
