import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
