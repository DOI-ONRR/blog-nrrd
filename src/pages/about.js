import * as React from "react";
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../../static/img/favicon.ico'

const AboutPage = () => {
    return (
        <Layout location='/about'>
            <Helmet
            htmlAttributes={{ lang: 'en' }}
            title='About the blog'
            link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}

            >
            </Helmet>

            <div class="grid-container line-height-sans-4">
                <div class="grid-row">
                    <div class="grid-col">
                        <h1 className="post-heading">About our blog</h1>
                    </div>
                </div>
                <div class="grid-row">
                    <div class="grid-col">
                        <section>
                                <p>This blog chronicles the Open Data, Design, and Development (ODDD) team’s advancements in federal digital service. The ODDD team is part of the Department of Interior’s (DOI) Office of Natural Resources Revenue (ONRR). In addition to our agency’s private intranet, we maintain the following public-facing websites:</p>
                            <ul>
                                <li><a class="usa-link usa-link--external" href="https://www.onrr.gov/" target="_blank" rel="noreferrer">onrr.gov</a>: This is the public, front-facing site for ONRR. ONRR collects, accounts for, and verifies energy and mineral revenues. We then distribute the funds to States, American Indians, and the U.S. Treasury.</li>
                                <li><a class="usa-link usa-link--external" href="https://revenuedata.doi.gov/" target="_blank" rel="noreferrer">revenuedata.doi.gov</a>: This site (also called NRRD) provides open data and contextual information about how natural resources and their revenues are managed in the United States.</li>
                                <li><a href="https://blog-nrrd.doi.gov/" target="_blank" rel="noreferrer">blog-nrrd.doi.gov</a>: You are currently on the about page for this blog! We use the blog to document our lessons learned from modernizing onrr.gov and NRRD.</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div class="grid-row">
                    <div class="grid-col">
                        <section>
                            <h2>History</h2>
                            <p>The ODDD team’s origins began in 2014 with the creation of the NRRD site. The original NRRD site was designed and developed in partnership with digital services experts at the General Services Administration’s <a class="usa-link usa-link--external" href="https://18f.gsa.gov/" target="_blank" rel="noreferrer">18-F organization</a>.</p>
                            <p>In 2017, ONRR hired internal staff members (who became the ODDD team) to bring the design and development work in-house. We took over the site's product management, user research, design, and development responsibilities.</p>
                            <p>In 2020, our team took on a second website, onrr.gov, and commenced work on its redesign. In fall 2022, the new redesign of onrr.gov launched.</p>
                            <p>A full, detailed timeline can be found on <a class="usa-link usa-link--external" href="https://github.com/DOI-ONRR/nrrd/wiki#project-background" target="_blank" rel="noreferrer">our wiki</a>.</p>
                        </section>
                    </div>
                </div>
                <div class="grid-row">
                    <div class="grid-gap">
                        <section>
                            <h2>What guides our work</h2>
                            <p>We are committed to delivering transparent, accessible, and user-friendly digital services. Our guiding principles are shaped by our dedication to innovation, accountability, and collaboration. We strive to make data and information readily available and understandable for all stakeholders. We want to ensure that our digital presence reflects our values of openness and inclusivity.</p>
                            
                            <h3>User-centered design and development</h3>
                            <p>Our team follows user-centered design and development practices as best we can. We’re always looking for research participants to help us improve the site for users. If you’re interested in participating in a user research interview, email us at <a href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a>.</p>
                            
                            <h3>Working in the open</h3>
                            <p>We work in the open, with open-source tools. We believe this approach is a good fit for government. All of our site changes and issues are captured in our <a class="usa-link usa-link--external" href="https://github.com/DOI-ONRR" target="_blank" rel="noreferrer">GitHub repositories</a>, and anyone can clone our codebase.</p>
                            
                            <h3>Our duty is to everyone</h3>
                            <p>We work for the people of the United States, and thus believe our product and work processes must be accessible and inclusive to everyone. As a result, accessibility is among our core success metrics.</p>
                            
                            <h3>Important laws and regulations</h3>
                            <p>These laws reinforce ONRR’s commitment to exceptional digital service and data transparency. This is not meant to be an exhaustive list but highlights the major laws and regulations that guide our work.</p>
                            <ul>
                                <li><a class="usa-link usa-link--external" href="https://digital.gov/resources/delivering-digital-first-public-experience/" target="_blank" rel="noreferrer">The 21st Century IDEA</a></li>
                                <li><a class="usa-link usa-link--external" href="https://data.gov/open-gov/" target="_blank" rel="noreferrer">The OPEN Government Data Act</a></li>
                                <li><a class="usa-link usa-link--external" href="https://www.section508.gov/" target="_blank" rel="noreferrer">Section 508</a></li>
                                <li><a class="usa-link usa-link--external" href="https://www.plainlanguage.gov/law/" target="_blank" rel="noreferrer">The Plain Language Writing Act of 2010</a></li>
                                <li><a class="usa-link usa-link--external" href="https://www.doi.gov/ocio/policy-mgmt-support/information-and-records-management/iq" target="_blank" rel="noreferrer">The Information Quality Act</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div class="grid-row">
                    <div class="grid-gap">
                        <section>
                            <h2>Contact</h2>
                            <p>We appreciate any feedback and love to discuss our work with others! Drop us a line at <a href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a>.</p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
  );
};

export default AboutPage;