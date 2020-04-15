import React from 'react'
import './index.styl'
import {
  StepBackwardOutlined,
  FormOutlined,
  CloudUploadOutlined,
  StarOutlined,
  SyncOutlined,
  SmileOutlined,
  SolutionOutlined,
  SearchOutlined,
} from '@ant-design/icons'
const Features = () => {
  return (
    <div className='wrapper-content'>
      <h1 className='text-centr'>Discover Features</h1>
      <p className='text-p'>Features comes with an AngularJS version, 4 colour schemes and 100+ components</p>
      <div className='item-wrapper'>
        <div className='img-wrapper'>
          <img src='/public/img/feature-1.png' />
        </div>
        <div className='use'>
          <div className='case'>
            <StepBackwardOutlined /> 20+ Use Case-based App Pages
          </div>
          <div className='icon'>
            <FormOutlined />
            100+ Components and Widgets
          </div>
          <div className='icon'>
            <CloudUploadOutlined />
            Useful Chart divbraries
          </div>
          <div className='icon'>
            <StarOutlined />
            AngularJS Version Included
          </div>
          <div className='icon'>
            <SyncOutlined />
            Built on Bootstrap 3
          </div>
          <div className='icon'>
            <SmileOutlined />
            Fully Responsive
          </div>
          <div className='icon'>
            <SolutionOutlined />
            Vadivd HTML5 + CSS3
          </div>
          <div className='icon'>
            <SearchOutlined />
            Free Updates & Support + Documentation[screenshot]
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
