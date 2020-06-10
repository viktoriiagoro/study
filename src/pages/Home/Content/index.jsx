import { VIDEOS_CONTENT } from '../../../constanst'
import React from 'react'
import './index.styl'
import { Layout, Row, Col } from 'antd'

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
                <img src='/public/img/noticia-youtube-min.jpg' width='100%' height='100%' />
                <div className='video-description-wrap'>
                  <div className='photo-user'>
                    <img src='/public/img/2020-05-15 14.30.59.jpg' width='100%' height='100%' />
                  </div>
                  <div className='metadata'>
                    <div className='video-title'>
                      Top 50 SHAZAMsdfasdfasf as dfa sdf asdf asdfasdf asdf asdf sdfkas;lkdfj a;ljf l;kasjd flkjasd
                      lfkjaslk; fjlaks jf
                    </div>
                    <div className='text'>Helios Music</div>
                    <div className='text'>394 тис. переглядів 1 місяць тому</div>
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
