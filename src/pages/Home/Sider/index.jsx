import {
  HomeOutlined,
  FireOutlined,
  VideoCameraAddOutlined,
  PlaySquareOutlined,
  ClockCircleOutlined,
  DownOutlined,
  YoutubeOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  FlagOutlined,
  CommentOutlined,
} from '@ant-design/icons'
import React from 'react'
import { Layout, Divider } from 'antd'
import './index.styl'

const Sider = () => {
  return (
    <Layout.Sider className='sider' theme='light' width='240px'>
      <div className='menu-wrap'>
        <div className='menu-item menu-active'>
          <HomeOutlined className='menu-item-icon' />
          <span className='menu-item-title'>Головна</span>
        </div>
        <div className='menu-item '>
          <FireOutlined className='menu-item-icon' />
          <div className='item'>Популярне</div>
        </div>
        <div className='menu-item'>
          <VideoCameraAddOutlined className='menu-item-icon' />
          <div className='item'>Підписки</div>
        </div>
      </div>
      <Divider className='divider' />
      <div className='menu-wrap'>
        <div className='menu-item'>
          <PlaySquareOutlined className='menu-item-icon' />
          <div className='item'>Бібліотека</div>
        </div>
        <div className='menu-item'>
          <ClockCircleOutlined className='menu-item-icon' />
          <div className='item'>Історія</div>
        </div>
        <div className='menu-item'>
          <PlaySquareOutlined className='menu-item-icon' />
          <div className='item'>Ваші відео</div>
        </div>
        <div className='menu-item'>
          <DownOutlined className='menu-item-icon' />
          <div className='item'>Показати більше</div>
        </div>
        <Divider className='divider' />
        <div className='menu-title'>ПІДПИСКИ</div>
      </div>
      <div className='menu-wrap'>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>НТВ</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>Новий канал</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>DKA-DEVELOP</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>Типичний вер...</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>Говорить україна</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>ICTV</div>
        </div>
        <div className='menu-item'>
          <YoutubeOutlined className='menu-item-icon' />
          <div className='item'>Андрей Андр...</div>
        </div>
        <div className='menu-item'>
          <div className='icon'>
            <DownOutlined className='menu-item-icon' />
          </div>
          <div className='item'>Показати ще 51</div>
        </div>
        <Divider className='divider' />
        <div className='menu-title'>БІЛЬШЕ З YOUTUBE</div>
      </div>
      <div className='menu-wrap'>
        <div className='menu-item'>
          <div className='icon'>
            <YoutubeOutlined className='menu-item-icon' />
          </div>
          <div className='item'>YouTube Premium</div>
        </div>
        <div className='menu-item'>
          <div className='icon'>
            <FireOutlined className='menu-item-icon' />
          </div>
          <div className='item'>Фільми YouTube</div>
        </div>
        <div className='menu-item'>
          <div className='icon'>
            <HeartOutlined className='menu-item-icon' />
          </div>
          <div className='item'>Ігри</div>
        </div>
      </div>
      <div className='menu-wrap'>
        <div className='menu-item'>
          <div className='icon'>
            <VideoCameraAddOutlined className='menu-item-icon' />
          </div>
          <div className='item'>Прямі трансляції</div>
        </div>
        <Divider className='divider' />
        <div className='menu-wrap'>
          <div className='menu-item'>
            <FireOutlined className='menu-item-icon' />
            <div className='item'>Налаштування</div>
          </div>
          <div className='menu-item'>
            <FlagOutlined className='menu-item-icon' />
            <div className='item'>Історія скарг</div>
          </div>
          <div className='menu-item'>
            <QuestionCircleOutlined className='menu-item-icon' />
            <div className='item'>Довідка</div>
          </div>
          <div className='menu-item'>
            <CommentOutlined className='menu-item-icon' />
            <div className='item'>Надіслати відгук</div>
          </div>
        </div>
      </div>
      <Divider className='divider' />
      <div className='promo'>
        <p>Інфо Преса Авторські права Зв’язатися з нами Творці Реклама Розробники</p>
      </div>
      <div className='promo'>
        <p>Умови Конфіденційність Політика та безпека Спробувати нові функції</p>
      </div>
      <div className='copyright'>
        <div>© 2020 Google LLC</div>
      </div>
    </Layout.Sider>
  )
}

export default Sider
