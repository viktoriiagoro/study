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
                  // eslint-disable-next-line react/jsx-handler-names
                  <div className={'menu-item' + (itm.isActive ? ' menu-active' : '')} key={ind} onClick={itm.action}>
                    <div className='left-wrap'>
                      <Icon className='menu-item-icon' />
                      <div className='menu-item-title'>{itm.title}</div>
                    </div>
                    <div className='right-wrap'>
                      <div className={'dot-default' + (itm.isOnline && !itm.isBroadcasting ? ' dot-online' : '')} />
                      {itm.isBroadcasting ? <Icon className='icon-stream' /> : null}
                    </div>
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
