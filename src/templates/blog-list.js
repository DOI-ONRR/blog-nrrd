import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout.js'
import Pagination from '../components/Pagination.js'
import Helmet from 'react-helmet'
import favicon from '../../static/img/favicon.ico'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
        >
        </Helmet>

        <div class="grid-container">
          {posts.map(({ node, index }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div class="grid-row blog-post-item" key={index}>
                <div class="grid-col" key={node.fields.slug}>
                  <h2>
                    <Link class="post-link" to={node.fields.slug}>{title}</Link>
                  </h2>
                  <p class="post-date margin-bottom-05">{node.frontmatter.date}</p>
                  <p class="post-excerpt">{node.frontmatter.excerpt}</p>
                </div>
              </div>
            )
          })}
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
