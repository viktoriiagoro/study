import { Container } from 'components'
import React from 'react'
import './index.styl'

const AppKit = () => {
  return (
    <Container className='AppKit'>
      <h1 className='text'>Why Use AppKit?</h1>
      <p className='text1'>
        Appkit uses modern front-end technologies and is packed with useful components and widgets to speed up your app
        development
      </p>
      <div className='imges'>
        <div className='item-img'>
          <img src='/public/img/logo-bootstrap.svg' />
        </div>
        <div className='item-img'>
          <img src='/public/img/logo-angular.svg' />
        </div>
        <div className='item-img'>
          <img src='/public/img/logo-css3.svg' />
        </div>
        <div className='item-img'>
          <img src='/public/img/logo-html5.svg' />
        </div>
        <div className='item-img'>
          <img src='/public/img/logo-less.svg' />
        </div>
        <div className='item-img'>
          <img src='/public/img/logo-jquery.svg' />
        </div>
      </div>
      <div className='item-conteiner'>
        <div className='item-inner'>
          <div className='figure'>
            <img src='/public/img/figure-1.png' />
            <h3 className='h3'>UX-Centered Design</h3>
            <p className='item'>
              Bespoke UX/UI design to enhance your app's user experience. Let AppKit take care of the design so you can
              develop without design resources.
            </p>
          </div>
          <div className='figure'>
            <img src='/public/img/figure-2.png' />

            <h3 className='h3'>Supercharge App Development</h3>
            <p className='item'>
              AppKit provides developers with a ready-made front-end solution so you can concentrate on making your
              app’s back-end robust and awesome. It empowers small teams to create big things.
            </p>
          </div>
          <div className='figure'>
            <img src='/public/img/figure-3.png' />

            <h3 className='h3'>Mobile First</h3>
            <p className='item'>
              Built on the popular Bootstrap framework, so the design is “Mobile First” and fully responsive. For a
              startup, building an HTML5 webapp which also works across mobile devices is the most cost-effective way to
              get your product off the ground.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AppKit
