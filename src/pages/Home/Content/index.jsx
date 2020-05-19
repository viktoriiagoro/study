import React from 'react'
import './index.styl'
import { Layout, Row, Col } from 'antd'

const videos = [...Array(100).keys()]

const Content = () => {
  return (
    <Layout.Content>
      <div className='title'>
        <span className='title-style'>Рекомендовано</span>
      </div>
      <Row>
        {videos.map((value) => (
          <Col xs={24} sm={12} lg={8} xl={6} xxl={4}>{`Video-${value + 1}`}</Col>
        ))}
      </Row>
    </Layout.Content>
  )
}

export default Content
