import React from 'react'
import './index.styl'

const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <div className='menu-left'>Delphic</div>
        <div className='menu'>
          <div className='menu-item blue'>Home</div>
          <div className='menu-item'>Portfolio</div>
          <div className='menu-item'>Services</div>
          <div className='menu-item'>Other</div>
          <div className='menu-item'>Contact</div>
        </div>
      </div>
      <div className='container'>
        <div className='main-img'></div>
        <div className='dots-wrap'>
          <div className='point'></div>
          <div className='point'></div>
          <div className='point'></div>
          <div className='point'></div>
        </div>
        <div className='text'>
          Sed up perspiciatis unde omnis iste natus error sit voluptatem accusantium. Praesent urnaurna, venenatis at
          ultrices ac, viverra in turpis. Duis sceler isque mauri sut metus.
        </div>
        <div className='items-wrapper'>
          <div className='item-wrap'>
            <div className='item-img'></div>
            <div className='item-title'>Title1</div>
            <div className='item-desc'>desk1</div>
          </div>
          <div className='item-wrap'>
            <div className='item-img'></div>
            <div className='item-title'>Title2</div>
            <div className='item-deck'>desk2</div>
          </div>
          <div className='item-wrap'>
            <div className='item-img'></div>
            <div className='item-title'>Title3</div>
            <div className='item-deck'>desk3</div>
          </div>
          <div className='item-wrap'>
            <div className='item-img'></div>
            <div className='item-title'>Title4</div>
            <div className='item-deck'>desk4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
