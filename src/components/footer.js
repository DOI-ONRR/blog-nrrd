import React from 'react'
import logo from '../img/DOI-2x.png'

const Footer = () => (
  <footer>
    <div class="grid-container padding-top-10">
      <div class="grid-row grid-gap-4">
        <div class="grid-col-auto doi-footer-logo">
          <a href="https://doi.gov">
            <img src={logo}
              alt={`Department of the Interior logo`}
            />
          </a>
        </div>
        <div class="grid-col">
          <h3>
            <a href="https://doi.gov" class="text-white text-no-underline">U.S. Department of the Interior</a>
          </h3>
          <p class="footer-address">
            <span>Office of Natural Resources Revenue</span>
            <span>PO Box 25165</span>
            <span>Denver, CO 80225-0165</span>
            <span><a href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a></span>
          </p>
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col footer-blurb">
          From the team that works on <a href='https://revenuedata.doi.gov'>Natural Resources Revenue Data</a> and <a href='https://www.onrr.gov/'>ONRR.gov</a>. 
          Have feedback or a blog post idea? <a href='mailto:nrrd@onrr.gov'>Drop us a line</a>.
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col footer-social-icons">
          <a href='https://blog-nrrd.doi.gov/rss.xml'>
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use href="/assets/img/sprite.svg#rss_feed"></use>
            </svg>
          </a>
          <a href='https://github.com/DOI-ONRR'>
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use href="/assets/img/sprite.svg#github"></use>
            </svg>
          </a>
          <a href='https://www.facebook.com/DOIONRR/'>
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use href="/assets/img/sprite.svg#facebook"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col footer-links">
          <a href="/about">About</a>
          <a href="https://revenuedata.doi.gov/accessibility">Accessibility</a>
          <a href="https://doi.gov/privacy">Privacy Policy</a>
          <a href="https://doi.gov/FOIA">Freedom of Information Act (FOIA)</a>
          <a href="https://revenuedata.doi.gov/vdp">Vulnerability Disclosure Policy</a>
          <a href="https://www.doi.gov/pmb/eeo/reports-repository">No Fear Act</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
