import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
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

        <div class="grid-container blog-post">
          <div class="grid-row">
            <div class="grid-col">
              <h1 className="post-heading">{post.frontmatter.title}</h1>
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-col">
              <p class="post-date">{post.frontmatter.date}</p>
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-col">
              <div class="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-col">
              <hr class="height-1px" />
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-col blog-note">
              <p><i>Note : Reference in this blog to any specific commercial product, process, or service, is for the information and convenience 
                of the public, and does not constitute endorsement, recommendation, or favoring by the Department of the Interior.</i></p>
            </div>
          </div>
          {
            (post.frontmatter.authors).map((author, index) => (
              <div class="grid-row grid-gap-1" key={index}>
                <div class="grid-col-auto">
                  <img
                    src={author.pic}
                    alt={author.id + ` profile image`}
                    className="author-image"
                    />
                </div>
                <div class="grid-col author-bio">
                  <p>
                    <strong>{author.id}: </strong>{author.bio}.
                    {author.email && (
                      <span class="margin-left-1"><a href={`mailto:${author.email}`} class="usa-link">Contact {author.id.split(' ')[0]}.</a></span>
                    )}
                  </p>
                </div>
              </div>
            ))
          }
          <div class="grid-row grid-gap margin-y-3">
            <div class="grid-col-6">
              {
                previous &&
                <Link to={previous.fields.slug} rel="prev" class="usa-link line-height-sans-4">
                  <svg class="usa-icon text-middle" aria-hidden="true" focusable="false" role="img">
                    <use href="/assets/img/sprite.svg#navigate_before"></use>
                  </svg>
                  {previous.frontmatter.title}
                </Link>
              }
            </div>
            <div class="grid-col-6">
              {
                next &&
                <Link to={next.fields.slug} rel="next" class="usa-link line-height-sans-4">
                  {next.frontmatter.title}
                  <svg class="usa-icon text-middle" aria-hidden="true" focusable="false" role="img">
                    <use href="/assets/img/sprite.svg#navigate_next"></use>
                  </svg>
                </Link>
              }
            </div>
          </div>
          <div class="grid-col text-center padding-top-2">
          {
             <Link to='/' class="usa-link">Home</Link>
          }
          </div>
        </div>
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
          email
        }
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
