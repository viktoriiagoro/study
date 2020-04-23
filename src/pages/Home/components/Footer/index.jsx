import { Container } from 'components'
import React from 'react'
import './index.styl'

const Footer = () => {
  return (
    <Container wrapperClassName='footer'>
      <small>
        Designed with
        <img src='/public/img/favicon.ico' />
        by
        <a className='foot'> Xiaoying Riley</a>
        for developers
      </small>
    </Container>
  )
}

export default Footer
