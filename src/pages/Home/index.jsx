import { Header, AppKit, Customers, Features, Team, Pricing } from './components'
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
      </div>
    </div>
  )
}

export default Home
