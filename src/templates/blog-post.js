import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import favicon from '../../static/img/favicon.ico'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}

        >
        </Helmet>

        <h1 className="post-heading">{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            color: '#627884',
            marginBottom: rhythm(1),
            marginTop: rhythm(-.7),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
<p><i>Note : Reference in this blog to any specific commercial product, process, or service, is for the information and convenience of the public, and does not constitute endorsement, recommendation, or favoring by the Department of the Interior.</i></p>
      {
        (post.frontmatter.authors).map((author, index) => (
          <div key={index} className="author-bio">
           <div className="author-profile-container">
             <img
                    src={author.pic}
                    alt={author.id + ` profile image`}
                    className="author-image"
              />
            </div>
            <p
              style={{
                marginRight: rhythm(1 / 2),
              }}
            ><strong>{author.id}: </strong>{author.bio}.
            </p>
          </div>
        ))
      }

        <ul className='other-posts'
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      {
        <div className="home-link">
          <Link to='/'>
          Home</Link>
        </div>
      }
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        authors {
          id:yamlId
          bio
          pic
        }
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
