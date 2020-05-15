import { MenuOutlined, AppstoreOutlined, PlaySquareOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { Button, Input, Layout } from 'antd'
import './index.styl'

const Header = () => {
  return (
    <Layout.Header className='header'>
      <div className='icon'>
        <MenuOutlined />
      </div>
      <div className='png'>
        <img src='/public/img/noticia-youtube-min.jpg' width='130px' height='75px' />
      </div>
      <div className='search'>
        <Input placeholder='Пошук' />
        <Button icon={<SearchOutlined />} />
      </div>

      <div className='icon-left'>
        <div className='icones'>
          {' '}
          <PlaySquareOutlined />
        </div>
        <div className='icones'>
          <AppstoreOutlined />
        </div>
        <div className='icones'>
          <BellOutlined />
        </div>
        <div className='profile'>
          <img scr='/public/img/2020-05-1514.30.59.jpg' width='35' height='35' />
        </div>
      </div>
    </Layout.Header>
  )
}

export default Header
