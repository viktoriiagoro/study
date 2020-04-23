import { Container } from 'components'
import React from 'react'
import './index.styl'

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='wrapper-footer'>
        <small>
          Designed with
          <img src='/public/img/favicon.ico' />
          by
          <a className='foot'> Xiaoying Riley</a>
          for developers
        </small>
      </Container>
    </div>
  )
}

export default Footer
