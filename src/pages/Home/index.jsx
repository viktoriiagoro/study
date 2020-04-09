import React from 'react'
import './index.styl'
const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <div className='header-top'>
          <div className='letter'>
            <span className='span'>APP</span>KIT
          </div>
          <div className='menu'>
            <div className='menu-item'>About</div>
            <div className='menu-item'>Testimonials</div>
            <div className='menu-item'>Features</div>
            <div className='menu-item'>Team</div>
            <div className='menu-item'>Pricing</div>
            <div className='menu-item'>Contact</div>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='menu-left'>
            AppKit is the perfect front-end template for app developers.
            <p className='p'>It helps developers to build beautiful and user-friendly web apps quickly and easily!</p>
            <button className='button'>Try in now</button>
          </div>
          <img src='/public/img/imac.png' />
        </div>
        <div className='container'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
      <div className='body'>
        <div className='wrapper'>
          <h1 className='text'>Why Use AppKit?</h1>
          <p className='text1'>
            Appkit uses modern front-end technologies and is packed with useful components and widgets to speed up your
            app development
          </p>
          <div className='img'>
            <div>
              <img src='/public/img/logo-bootstrap.svg'></img>
            </div>
            <div>
              <img src='/public/img/logo-angular.svg'></img>
            </div>
            <div>
              <img src='/public/img/logo-css3.svg'></img>
            </div>
            <div>
              <img src='/public/img/logo-html5.svg'></img>
            </div>
            <div>
              <img src='/public/img/logo-less.svg'></img>
            </div>
            <div>
              <img src='/public/img/logo-jquery.svg'></img>
            </div>
          </div>
        </div>
        <div className='figure'>
          <div className='figuree'>
            <img src='/public/img/figure-1.png'></img>
          </div>
          <div className='figuree'>
            <img src='/public/img/figure-2.png'></img>
          </div>
          <div className='figuree'>
            <img src='/public/img/figure-3.png'></img>
          </div>
        </div>
        <div className='text-bottom'>
          <div className='text3'>UX-Centered Design</div>
          <div className='text3'>Supercharge App</div>
          <div className='text3'>Mobile First</div>
        </div>
        <div className='text-bottom2'>
          <div className='text4'>
            Bespoke UX/UI design to enhance your app's user experience. Let AppKit take care of the design so you can
            develop without design resources.
          </div>
          <div className='text4'>
            AppKit provides developers with a ready-made front-end solution so you can concentrate on making your app’s
            back-end robust and awesome. It empowers small teams to create big things.
          </div>
          <div className='text4'>
            Built on the popular Bootstrap framework, so the design is “Mobile First” and fully responsive. For a
            startup, building an HTML5 webapp which also works across mobile devices is the most cost-effective way to
            get your product off the ground.
          </div>
        </div>
        <div className='conteiner'>
          <div className='conteiner2'>
            <div className='title'>Many Happy Customers</div>
          </div>
          <div className='centr-img'>
            <div className='profile'>
              <img src='/public/img/profile-1.png'></img>

              <p className='info'>
                Testimonial goes here Donec felis odio, sagittis eu cursus ac, porttitor eu purus. In a bibendum dui.
                Nullam id est sed felis rutrum tincidunt eu nec nisi morbi euismod semper neque sed lobortis.
              </p>
              <div className='jon'>@JohnK, San Francisco</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
