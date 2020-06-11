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
        <Tooltip title='25 невероятных фактов о съемках Гарри Поттера'>
          <span className='title-style'>Рекомендовано</span>
        </Tooltip>
      </div>
      <Row>
        {VIDEOS_CONTENT.map((item, index) => {
          console.log({ item, index })
          return (
            <Col xs={24} sm={24} md={12} lg={8} xxl={4} key={index}>
              <div className='video-item-wrap'>
                <img src='/public/img/noticia-youtube-min.jpg' width='100%' height='100%' />
                <span className='duration'>22:40</span>
                <div className='video-description-wrap'>
                  <div className='photo-user'>
                    {item.avatar}
                    {/* <img src='/public/img/2020-05-15 14.30.59.jpg' width='100%' height='100%' /> */}
                  </div>
                  <div className='metadata'>
                    <div className='video-title'>{item.title} </div>
                    <div className='text'>{item.channelName}</div>
                    <div className='text'>
                      {item.numberOfViews}
                      {item.createdAt}
                    </div>
                  </div>
                  <div className='button'>
                    <MoreOutlined />
                  </div>
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
