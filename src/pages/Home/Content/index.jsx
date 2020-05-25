import React from 'react'
import './index.styl'
import { Layout, Row, Col } from 'antd'

const videos = [...Array(100).keys()]

const Content = () => {
  return (
    <Layout.Content className='content-2' theme='light' width='240px'>
      <div className='title'>
        <span className='title-style'>Рекомендовано</span>
      </div>
      <Row>
        {videos.map((value, ind) => (
          <Col xs={24} sm={12} lg={8} xl={6} xxl={4} key={ind}>
            <div className='content'>
              <img src='/public/img/noticia-youtube-min.jpg' width='100%' height='100%' />
              <div className='page-wrap'>
                <div className='photo-user'>
                  <img src='/public/img/2020-05-15 14.30.59.jpg' width='115' height='115' />
                </div>
                <div className='content-title'>
                  Top 50 SHAZAM❄️Лучшая Музыка 2020❄️Зарубежные песни Хиты❄️Популярные{' '}
                </div>
              </div>
              <div className='text'>Helios Music</div>
              <div className='text'>394 тис. переглядів 1 місяць тому</div>
            </div>
          </Col>
        ))}
      </Row>
    </Layout.Content>
  )
}

export default Content
