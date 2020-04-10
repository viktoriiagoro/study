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
          <div className='imges'>
            <div className='item-img'>
              <img src='/public/img/logo-bootstrap.svg'></img>
            </div>
            <div className='item-img'>
              <img src='/public/img/logo-angular.svg'></img>
            </div>
            <div className='item-img'>
              <img src='/public/img/logo-css3.svg'></img>
            </div>
            <div className='item-img'>
              <img src='/public/img/logo-html5.svg'></img>
            </div>
            <div className='item-img'>
              <img src='/public/img/logo-less.svg'></img>
            </div>
            <div className='item-img'>
              <img src='/public/img/logo-jquery.svg'></img>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item-conteiner'>
              <div className='item-inner'>
                <div className='figure'>
                  <img src='/public/img/figure-1.png'></img>

                  <h3>UX-Centered Design</h3>
                  <p className='item'>
                    Bespoke UX/UI design to enhance your app's user experience. Let AppKit take care of the design so
                    you can develop without design resources.
                  </p>
                </div>
                <div className='figure'>
                  <img src='/public/img/figure-2.png'></img>

                  <h3>Supercharge App Development</h3>
                  <p className='item'>
                    AppKit provides developers with a ready-made front-end solution so you can concentrate on making
                    your app’s back-end robust and awesome. It empowers small teams to create big things.
                  </p>
                </div>
                <div className='figure'>
                  <img src='/public/img/figure-3.png'></img>

                  <h3>Mobile First</h3>
                  <p className='item'>
                    Built on the popular Bootstrap framework, so the design is “Mobile First” and fully responsive. For
                    a startup, building an HTML5 webapp which also works across mobile devices is the most
                    cost-effective way to get your product off the ground.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='conteiner'>
          <div className='conteiner-content'>
            <div className='title'>Many Happy Customers</div>
            <div className='centr-img'>
              <div className='profile'>
                <div className='photo3'>
                  <img src='/public/img/profile-1.png'></img>
                </div>
                <div className='info'>
                  <p className='title2'>
                    Testimonial goes here Donec felis odio, sagittis eu cursus ac, porttitor eu purus. In a bibendum
                    dui. Nullam id est sed felis rutrum tincidunt eu nec nisi morbi euismod semper neque sed lobortis.
                  </p>
                  <div className='jon'>@JohnK, San Francisco</div>
                </div>
              </div>
            </div>
            <div className='profile2'>
              <div className='info2'>
                <p>
                  Testimonial goes here fermentum sed pharetra in, aliquet sodales quam. Ut sed turpis quis orci viverra
                  aliquet interdum ut ipsum.
                  <div className='lisa'>@LisaWhite, London</div>
                </p>
              </div>
              <div className='photo'>
                <img src='/public/img/profile-2.png'></img>
              </div>
            </div>
            <div className='profile3'>
              <div className='photo4'>
                <img src='/public/img/profile-3.png'></img>
              </div>
              <div className='info3'>
                <p>
                  Testimonial goes here vestibulum non hendrerit lorem, luctus tincidunt erat. Sed pharetra aliquam
                  posuere. Pellentesque sollicitudin.
                  <div className='berlin'>@MattH, Berlin</div>
                </p>
              </div>
            </div>
            <div className='profile4'>
              <div className='info4'>
                <p>
                  Testimonial goes here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  <div className='ryan'>@RyanW, Paris</div>
                </p>
              </div>
              <div className='photo2'>
                <img src='/public/img/profile-4.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
