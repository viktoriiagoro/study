import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import './index.styl'
const Home = () => {
  return (
    <div className='header'>
      <MenuOutlined />
      <img src='/public/img/noticia-youtube-min.jpg' width='140px' />
      <form className='search' id='box'>
        <input placeholder='Пошук' className='input' type='text' />
      </form>
    </div>
  )
}

export default Home
