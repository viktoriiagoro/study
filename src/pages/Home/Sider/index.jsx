import { SIDER_MENU } from '../../../constanst'
import React from 'react'
import { Layout, Divider } from 'antd'
import './index.styl'

const Sider = () => {
  return (
    <Layout.Sider className='sider' theme='light' width='240px'>
      {SIDER_MENU.map((item, index) => {
        return (
          <div key={index}>
            <div className='menu-title'>{item.title}</div>
            <div className='menu-wrap'>
              {item.menu.map((itm, ind) => {
                const Icon = itm.icon
                return (
                  <div className={'menu-item' + (itm.isActive ? ' menu-active' : '')} key={ind}>
                    <Icon className='menu-item-icon' />
                    <span className='menu-item-title'>{itm.title}</span>
                  </div>
                )
              })}
            </div>
            <Divider className='divider' />
          </div>
        )
      })}
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
