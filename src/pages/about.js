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

            <h1 className="post-heading">About the blog</h1>
            <div>
                Hello world!
            </div>
        
        </Layout>
  );
};

export default AboutPage;