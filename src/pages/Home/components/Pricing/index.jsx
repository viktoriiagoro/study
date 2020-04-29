import { Container } from 'components'
import React from 'react'
import './index.styl'

const Contact = () => {
  return (
    <Container className='wrapper-content'>
      <div className='prising'>
        <h1 className='pri'>Pricing</h1>
        <p className='text-p2'>AppKit's future updates are 100% FREE for existing customers</p>
        <div className='item-prising'>
          <div className='free'>
            <h3 className='hg1'>Single Appdivcation</h3>
            <div className='pris-figure'>
              <span className='currency'>$</span>
              <span className='number'>20</span>
            </div>
            <div className='desk'>
              <p className='text-prising'>Restricted to a single installation...</p>
              <a className='buy'>License Details</a>
            </div>
            <button className='buttons'>Buy Now</button>
          </div>
          <div className='free2'>
            <h3 className='hg1'>Multiple Appdivcations</h3>
            <div className='pris-figure'>
              <span className='currency'>$</span>
              <span className='number'>80</span>
            </div>
            <div className='desk'>
              <p className='text-prising'>May extend to multiple installations...</p>
              <a className='buy'>License Details</a>
            </div>
            <button className='buttons'>Buy Now</button>
          </div>
          <div className='free3'>
            <h3 className='hg1'>Extended</h3>
            <div className='pris-figure'>
              <span className='currency'>$</span>
              <span className='number'>1200</span>
            </div>
            <div className='desk'>
              <p className='text-prising'>May license, sublicense, redistribute, or resell the item...</p>
              <a className='buy'>License Details</a>
            </div>
            <button className='buttons'>Buy Now</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
