import React from 'react'
import './index.styl'
import Header from './Header'
import { Layout } from 'antd'
import Sider from './Sider'

const { Content } = Layout

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content>adfadsfasdf</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
