import { Header, AppKit, Customers, Features, Team, Pricing, Contact, Footer } from './components'
import React from 'react'
import './index.styl'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='body'>
        <AppKit />
        <Customers />
        <Features />
        <Team />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
