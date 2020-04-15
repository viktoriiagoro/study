import React from 'react'
import './index.styl'

const Pricing = () => {
  return (
    <div className='wrapper-prising'>
      <h1 className='pri'>Pricing</h1>
      <p className='text-p2'>AppKit's future updates are 100% FREE for existing customers</p>
      <div className='item-prising'>
        <div className='free'>
          <div className='item-1'>
            <h3 className='hg1'>Single Appdivcation</h3>
          </div>
        </div>
        <div className='free'>
          <div className='item-2'>
            <h3 className='hg1'>Multiple Appdivcations</h3>
          </div>
        </div>
        <div className='free'>
          <div className='item-3'>
            <h3 className='hg1'>Extended</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
