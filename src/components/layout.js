import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import './layout.css'
import '../../uswds/assets/css/styles.css'
import './prism-theme.css'
import Footer from './footer.js'
import mastImage from '../img/NRRD_blog_mast.png'
import Banner from './govbanner.js'
class Template extends React.Component {

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const mastText = "Open Data, Design, & Development at the Office of Natural Resources Revenue"

    let header

    if (location.pathname === rootPath) {
      header = (
        <div class="grid-container padding-top-5">
          <div class="grid-row">
            <div class="grid-col">
            <h1 className="masthead">
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#086996',
            }}
            to={'/'}
          >
            {mastText}
          <img
            src={mastImage}
            alt={`Department of the Interior Bison fenced in angle brackets`}
            style={{
              marginRight: rhythm(1 / 2),
              margin: 'auto',
              width: rhythm(10),
              height: rhythm(3.56),
              display: 'block',
            }}
        />
          </Link>
        </h1>
            </div>
          </div>
        </div>
      )
    } else {
      header = (
        <div class="grid-container padding-top-5">
          <div class="grid-row">
            <div class="grid-col">
              <h2 className="post-mast">
                <Link
                  style={{
                    boxShadow: 'none',
                    textDecoration: 'none',
                    color: '#086996',
                  }}
                  to={'/'}
                >
                  <img
                      src={mastImage}
                      alt={`Department of the Interior Bison fenced in angle brackets`}
                      style={{
                        marginRight: rhythm(1 / 2),
                        margin: 'auto',
                        width: rhythm(5),
                        height: rhythm(1.78),
                        display: 'block',
                      }}
                  />{mastText}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
    <div>
      <Banner />
      <main>
        {header}
        {children}
      </main>
     <Footer />
    </div>
    )
  }
}

export default Template
