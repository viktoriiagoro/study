import {
  MenuOutlined,
  AppstoreOutlined,
  PlaySquareOutlined,
  BellOutlined,
  SearchOutlined,
  AudioOutlined,
} from '@ant-design/icons'
import React from 'react'
import { Button, Input, Layout, Tooltip } from 'antd'
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
        <Input placeholder='Пошук' suffix={<AudioOutlined className='icon-wrap' />} />
        <Button icon={<SearchOutlined />} className='icone' />
      </div>
      <div className='icon-left'>
        <div className='icones'>
          {' '}
          <Tooltip title='Створити'>
            <PlaySquareOutlined />
          </Tooltip>
        </div>
        <div className='icones'>
          <Tooltip title='Додайте на YouTube'>
            <AppstoreOutlined />
          </Tooltip>
        </div>
        <div className='icones'>
          <Tooltip title='Сповiщення'>
            <BellOutlined />
          </Tooltip>
        </div>
        <div className='profile'>
          <div className='photo'>
            <img src='/public/img/2020-05-15 14.30.59.jpg' width='65' height='73' />
          </div>
        </div>
      </div>
    </Layout.Header>
  )
}

export default Header
