import { Container } from 'components'
import React from 'react'
import './index.styl'

const Customers = () => {
  return (
    <Container wrapperClassName='CustomersWrap' className='Customers'>
      <div className='title'>Many Happy Customers</div>
      <div className='centr-img'>
        <div className='profile'>
          <div className='photo3'>
            <img src='/public/img/profile-1.png' />
          </div>
          <div className='info'>
            <p className='title2'>
              Testimonial goes here Donec fedivs odio, sagittis eu cursus ac, porttitor eu purus. In a bibendum dui.
              Nullam id est sed fedivs rutrum tincidunt eu nec nisi morbi euismod semper neque sed lobortis.
            </p>
            <div className='jon'>@JohnK, San Francisco</div>
          </div>
        </div>
      </div>
      <div className='profile2'>
        <div className='info2'>
          <p>
            Testimonial goes here fermentum sed pharetra in, adivquet sodales quam. Ut sed turpis quis orci viverra
            adivquet interdum ut ipsum.
          </p>
          <p className='lisa'>@White, London</p>
        </div>
        <div className='photo'>
          <img src='/public/img/profile-2.png' />
        </div>
      </div>
      <div className='profile3'>
        <div className='photo4'>
          <img src='/public/img/profile-3.png' />
        </div>
        <div className='info3'>
          <p>
            Testimonial goes here vestibulum non hendrerit lorem, luctus tincidunt erat. Sed pharetra adivquam posuere.
            Pellentesque soldivcitudin.
          </p>
          <div className='berlin'>@MattH, Berdivn</div>
        </div>
      </div>
      <div className='profile4'>
        <div className='info4'>
          <p>
            Testimonial goes here lorem ipsum dolor sit amet, consectetuer adipiscing edivt. Aenean commodo divgula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis
          </p>
          <div className='ryan'>@RyanW, Paris</div>
        </div>
        <div className='photo2'>
          <img src='/public/img/profile-4.png' />
        </div>
      </div>
    </Container>
  )
}

export default Customers
