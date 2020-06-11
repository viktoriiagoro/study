import { MoreOutlined } from '@ant-design/icons'
import { VIDEOS_CONTENT } from '../../../constanst'
import React from 'react'
import './index.styl'
import { Layout, Row, Col, Tooltip } from 'antd'

const Content = () => {
  console.log({ VIDEOS_CONTENT })
  return (
    <Layout.Content className='main-content-wrap' theme='light' width='240px'>
      <div className='title'>
        <span className='title-style'>Рекомендовано</span>
      </div>
      <Row>
        {VIDEOS_CONTENT.map((item, index) => {
          console.log({ item, index })
          return (
            <Col xs={24} sm={24} md={12} lg={8} xxl={6} key={index}>
              <div className='video-item-wrap'>
                <div className='video-duration-wrap'>
                  <img src={item.videoPreview} width='100%' height='100%' />
                  <span className='duration'>22:40</span>
                </div>
                <div className='video-description-wrap'>
                  <div className='photo-user'>
                    <img src={item.avatar} width='100%' height='100%' />
                  </div>
                  <div className='metadata'>
                    <Tooltip title='25 невероятных фактов о съемках Гарри Поттера'>
                      <div className='video-title'>{item.title} </div>
                    </Tooltip>
                    <Tooltip title='Новий канал'>
                      <div className='video-description'>{item.channelName}</div>
                    </Tooltip>
                    <div className='text'>{item.numberOfViews}</div>
                  </div>
                  <MoreOutlined className='button' />
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Layout.Content>
  )
}

export default Content
