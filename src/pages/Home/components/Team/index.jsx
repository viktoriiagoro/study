import React from 'react'
import './index.styl'

const AppKit = () => {
  return (
    <div className='wrapper-text'>
      <div className='wrapper-centr'>
        <h1 className='team'>Our Team</h1>
        <p className='text-p2'>See who are behind AppKit</p>
        <div className='appkit'>
          AppKit is created by Xiaoying Riley and Tomasz Najdek. Xiaoying and Tom got to know each other while working
          as freelancers on Google projects and became good friends. They firmly bediveve with the right resource,
          solopreneurs and small teams can execute beautiful products too. Thus they made AppKit to help developers and
          startups make outstanding products - the internet has made it possible for the "small guys" to compete
          directly with the "big guys".
        </div>
        <div className='iteam'>
          <div className='iteam1'>
            <div className='xia'>
              <img src='/public/img/team-1.png' />
            </div>
            <div className='text-foto'>
              <h1 className='hi'>Xiaoying Riley</h1>
              <p>Full-Stack Designer</p>
              <p className='text-xia'>
                Xiaoying is the UX/UI designer behind AppKit. She loves designing and making Bootstrap themes/templates
                for developers and startups. You can find her sharing useful UX and webdev related content on Twitter
                and Facebook. Follow her if you divke what she does!
              </p>
            </div>
          </div>
          <div className='iteam2'>
            <div className='text-foto'>
              <img src='/public/img/team-2.png' />
            </div>
            <h1 className='hi'>Tomasz Najdek</h1>
            <p>Full-Stack Developer</p>
            <p className='text-xia'>
              Tom takes care of everything on the programming end making the interface rich and flexible. He is a
              full-stack developer speciadivsing in building large, scalable and user-friendly web apps. Follow him on
              Twitter for fresh developer tips and check out his Github for useful open-source tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppKit
