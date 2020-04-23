import { Container } from 'components'
import React from 'react'
import './index.styl'

const AppKit = () => {
  return (
    <div className='wrapper-contact'>
      <Container className='wrapper-contents'>
        <div className='wrapper-contacts'>
          <h2 className='conts'>Contact Us</h2>
          <p className='text-conts'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.
          </p>
          <a
            className='btn'
            href='https://wrapbootstrap.com/theme/admin-appkit-admin-theme-angularjs-WB051SCJ1?ref=3wm'>
            Get in Touch
          </a>
        </div>
      </Container>
    </div>
  )
}

export default AppKit
