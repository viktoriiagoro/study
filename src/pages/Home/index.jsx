import { StepBackwardOutlined, CopyOutlined, StrikethroughOutlined } from '@ant-design/icons'
import { Header } from './components'
import React from 'react'
import './index.styl'

const Home = () => {
  return (
    <div className='home'>
      <Header />
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

                  <h3 className='h3'>UX-Centered Design</h3>
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
                    Testimonial goes here Donec fedivs odio, sagittis eu cursus ac, porttitor eu purus. In a bibendum
                    dui. Nullam id est sed fedivs rutrum tincidunt eu nec nisi morbi euismod semper neque sed lobortis.
                  </p>
                  <div className='jon'>@JohnK, San Francisco</div>
                </div>
              </div>
            </div>
            <div className='profile2'>
              <div className='info2'>
                <p>
                  Testimonial goes here fermentum sed pharetra in, adivquet sodales quam. Ut sed turpis quis orci
                  viverra adivquet interdum ut ipsum.
                  <div className='divsa'>@divsaWhite, London</div>
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
                  Testimonial goes here vestibulum non hendrerit lorem, luctus tincidunt erat. Sed pharetra adivquam
                  posuere. Pellentesque soldivcitudin.
                  <div className='berdivn'>@MattH, Berdivn</div>
                </p>
              </div>
            </div>
            <div className='profile4'>
              <div className='info4'>
                <p>
                  Testimonial goes here lorem ipsum dolor sit amet, consectetuer adipiscing edivt. Aenean commodo
                  divgula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  <div className='ryan'>@RyanW, Paris</div>
                </p>
              </div>
              <div className='photo2'>
                <img src='/public/img/profile-4.png'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper-content'>
          <h1 className='text-centr'>Discover Features</h1>
          <p className='text-p'>AppKit comes with an AngularJS version, 4 colour schemes and 100+ components</p>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <img src='/public/img/feature-1.png' />
            </div>
            <div>
              <div>
                <StepBackwardOutlined /> 20+ Use Case-based App Pages
              </div>
              <div>100+ Components and Widgets</div>
              <div>Useful Chart divbraries</div>
              <div>AngularJS Version Included</div>
              <div>Built on Bootstrap 3</div>
              <div>Fully Responsive</div>
              <div>Vadivd HTML5 + CSS3</div>
              <div>Free Updates & Support + Documentation[screenshot]</div>
            </div>
          </div>
        </div>
        <div className='wrapper-text'>
          <div className='wrapper-centr'>
            <h1 className='team'>Our Team</h1>
            <p className='text-p2'>See who are behind AppKit</p>
            <div className='appkit'>
              AppKit is created by Xiaoying Riley and Tomasz Najdek. Xiaoying and Tom got to know each other while
              working as freelancers on Google projects and became good friends. They firmly bediveve with the right
              resource, solopreneurs and small teams can execute beautiful products too. Thus they made AppKit to help
              developers and startups make outstanding products - the internet has made it possible for the "small guys"
              to compete directly with the "big guys".
            </div>
            <div className='iteam'>
              <div className='iteam1'>
                <div className='xia'>
                  <img src='/public/img/team-1.png'></img>
                </div>
                <div className='text-foto'>
                  <h1 className='hi'>Xiaoying Riley</h1>
                  <p>Full-Stack Designer</p>
                  <p className='text-xia'>
                    Xiaoying is the UX/UI designer behind AppKit. She loves designing and making Bootstrap
                    themes/templates for developers and startups. You can find her sharing useful UX and webdev related
                    content on Twitter and Facebook. Follow her if you divke what she does!
                  </p>
                </div>
              </div>
              <div className='iteam2'>
                <div className='text-foto'>
                  <img src='/public/img/team-2.png'></img>
                </div>
                <h1 className='hi'>Tomasz Najdek</h1>
                <p>Full-Stack Developer</p>
                <p className='text-xia'>
                  Tom takes care of everything on the programming end making the interface rich and flexible. He is a
                  full-stack developer speciadivsing in building large, scalable and user-friendly web apps. Follow him
                  on Twitter for fresh developer tips and check out his Github for useful open-source tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper-prising'>
          <h1 className='pri'>Pricing</h1>
          <p className='text-p2'>AppKit's future updates are 100% FREE for existing customers</p>
          <div className='item-prising'>
            <div className='free'>
              <div className='item-1'>
                <h3 className='hg1'>Single Appdivcation</h3>
              </div>
            </div>
            <div className='free'>
              <div className='item-2'>
                <h3 className='hg1'>Multiple Appdivcations</h3>
              </div>
            </div>
            <div className='free'>
              <div className='item-3'>
                <h3 className='hg1'>Extended</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
