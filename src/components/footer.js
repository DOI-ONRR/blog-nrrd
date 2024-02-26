import React from 'react'
import { rhythm } from '../utils/typography'
import logo from '../img/DOI-2x.png'
import twitter from '../img/twitter.png'
import facebook from '../img/facebook.png'
import github from '../img/github.png'

const Footer = () => (
  <footer
    style={{
      background: '#086996',
      marginBottom: '0',
    }}
  >
    <div className='footer-content'
    >
        <div
          className='footer-img'
        >
          <a href='https://doi.gov/'>
              <img
                  src={logo}
                  alt={`Department of the Interior logo`}
                  style={{
                    marginRight: rhythm(1 / 2),
                    paddingLeft: '7px',
                    paddingTop: '2px',
                    margin: 'auto',
                    maxWidth: '130px',
                  }}
              />
          </a>
        </div>
      <div
        className='footer-contact'
        style={{
          display: 'block',
        }}
      />
      <h3 style={{ margin: 0 }}>
        <a
          href="https://www.onrr.gov/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          U.S. Department of the Interior 
        </a>
      </h3>
      <p
        style={{
          fontSize: '.8rem',
          color: 'white',
          lineHeight: rhythm(-1),
        }}
      >
        Office of Natural Resources Revenue, <br />
        PO Box 25165 <br />
        Denver, CO 80225-0165 <br />
        <a
          style={{
            color: 'white',
          }}
          href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a><br />
      </p>
      <div className='team'
        style={{
          display: 'block',
        }}
        >
          <em
            style={{
              fontWeight: '300',
              color: 'white',
            }}
          >From the team that works on <a style={{color: 'white'}} href='https://revenuedata.doi.gov'>Natural Resources Revenue Data</a> and <a style={{color: 'white'}} href='https://www.onrr.gov/'>ONRR.gov</a>. Have feedback or a blog post idea? <a style={{color: 'white'}} href='mailto:nrrd@onrr.gov'>Drop us a line</a>.
          <a style={{color: 'white'}} href='https://www.onrr.gov/accessibility'>ONRR Accessibility Statement</a></em>
      </div>

      <div className='social'>
        <a href='https://github.com/ONRR/'>
          <img
            className='social-icon'
            src={github}
            alt={`GitHub logo`}
          /></a>
          <a href='https://twitter.com/DOIONRR'>
          <img
            className='social-icon'
            src={twitter}
            alt={`Twitter logo`}
          /></a>
          <a href='https://www.facebook.com/DOIONRR/'>
          <img
            className='social-icon'
            src={facebook}
            alt={`Facebook logo`}
          /></a>
          </div>
          
          <div className='privacy'>
          <a
          href="https://doi.gov/privacy"
          style={{
            fontSize: '.8rem',
            color: 'white',
          }}
          >Privacy Policy
          </a>
          </div>
          </div>
  </footer>
)

export default Footer
