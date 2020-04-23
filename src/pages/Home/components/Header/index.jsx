import { Container } from 'components'
import React from 'react'
import './index.styl'

const Header = () => {
  return (
    <div className='head'>
      <Container className='Header'>
        <div className='header-top'>
          <div className='letter'>
            <span className='span'>APP</span>KIT
          </div>
          <div className='menu'>
            <div className='menu-item'>About</div>
            <div className='menu-item'>Testimonials</div>
            <div className='menu-item'>Features</div>
            <div className='menu-item'>Team</div>
            <div className='menu-item'>Pricing</div>
            <div className='menu-item'>Contact</div>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='menu-left'>
            AppKit is the perfect front-end template for app developers.
            <p className='p'>It helps developers to build beautiful and user-friendly web apps quickly and easily!</p>
            <button className='button'>Try in now</button>
          </div>
          <img src='/public/img/imac.png' />
        </div>
        <div className='container'>
          <div className='dot-1' />
          <div className='dot' />
          <div className='dot' />
        </div>
      </Container>
    </div>
  )
}

export default Header
