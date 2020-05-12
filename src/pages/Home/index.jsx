import { MenuOutlined, MonitorOutlined } from '@ant-design/icons'
import React from 'react'
import './index.styl'
const Home = () => {
  return (
    <div className='header'>
      <MenuOutlined />
      <img src='/public/img/noticia-youtube-min.jpg' width='140px' />
      <input placeholder='Поиск' className='input' type='text' />
      <MonitorOutlined />
    </div>
  )
}

export default Home
