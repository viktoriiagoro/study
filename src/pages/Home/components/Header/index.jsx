import { Container } from 'components'
import React from 'react'
import './index.styl'

const menuItems = ['About', 'Testimonials', 'Features', 'Team', 'Pricing', 'Contact']

const Header = () => {
  return (
    <Container wrapperClassName='Header'>
      <div className='header-top'>
        <div className='letter'>
          <span className='span'>APP</span>KIT
        </div>
        <div className='menu'>
          {menuItems.map((menuItem) => (
            <div className='menu-item' key={menuItem}>
              {menuItem}
            </div>
          ))}
        </div>
      </div>
      <div className='header-bottom'>
        <div className='menu-left'>
          AppKit is the perfect front-end template for app developers.
          <p className='p'>It helps developers to build beautiful and user-friendly web apps quickly and easily!</p>
          <button className='button'>Try in now</button>
        </div>
        <div className='figure-holder'>
          <img className='figure' src='/public/img/imac.png' />
        </div>
      </div>
      <div className='container'>
        <div className='dot-1' />
        <div className='dot' />
        <div className='dot' />
      </div>
    </Container>
  )
}

export default Header
