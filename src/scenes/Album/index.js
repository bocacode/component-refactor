import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './footer'
import Hero from './hero'
import Navbar from './navbar'
import CardList from './cardList'

function Album() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <CardList />
      </main>
      <Footer />
    </>
  )
}

export default Album