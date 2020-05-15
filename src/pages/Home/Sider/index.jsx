import React from 'react'
import { Layout } from 'antd'
import './index.styl'

const Sider = () => {
  return (
    <Layout.Sider className='sider' theme='light'>
      <div>menu 1</div>
      <div>menu 2</div>
    </Layout.Sider>
  )
}

export default Sider
