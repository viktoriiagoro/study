import { Container } from 'components'
import React from 'react'
import './index.styl'

const teamList = [
  {
    avatar: '/public/img/team-1.png',
    name: 'Xiaoying Riley',
    role: 'Full-Stack Developer',
    desc:
      'Xiaoying is the UX/UI designer behind AppKit. She loves designing and making Bootstrap themes/templates for developers and startups. You can find her sharing useful UX and webdev related content on Twitter and Facebook. Follow her if you divke what she does!',
  },
  {
    avatar: '/public/img/team-2.png',
    name: 'Tomasz Najdek',
    role: 'Full-Stack Developer',
    desc:
      'Tom takes care of everything on the programming end making the interface rich and flexible. He is a full-stack developer speciadivsing in building large, scalable and user-friendly web apps. Follow him on Twitter for fresh developer tips and check out his Github for useful open-source tools.',
  },
]

const AppKit = () => {
  return (
    <Container wrapperClassName='wrapper-team'>
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
          {teamList.map((itm) => (
            <div className='iteam1' key={itm.name}>
              <img src={itm.avatar} />
              <h1 className='hi'>{itm.name}</h1>
              <p>{itm.role}</p>
              <p className='text-xia'>{itm.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
    //
  )
}

export default AppKit
