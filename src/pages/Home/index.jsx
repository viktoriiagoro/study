import React from 'react'
import './index.styl'
import Header from './Header'
import { Layout } from 'antd'
import Sider from './Sider'
import Content from './Content'

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
