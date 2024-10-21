import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout.js'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'
import favicon from '../../static/img/favicon.ico'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location}>
        <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
        >
        </Helmet>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2
                style={{
                  marginBottom: rhythm(-0.1),
                }}
              >
                <Link style={{ boxShadow: 'none', textDecoration: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small
                style={{
                  color: '#627884',
                }}
              >{node.frontmatter.date}</small>
              <p
                style={{
                  marginTop: rhythm(.2),
                  marginBottom: rhythm(1.5)
                }}
              >{node.frontmatter.excerpt}</p>
            </div>
          )
        })}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            marginTop: '3rem',
            marginLeft: '0',
            padding: 0,
          }}
        >
          <li style={{ marginBottom: '0' }}>
          {!isFirst && (
            <Link to={'/'+prevPage} rel="prev">
              ← Newer
            </Link>
          )}
          </li>
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#1478a6' : '',
                  borderBottom: i + 1 === currentPage ? '4px solid #1478a6' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          <li style={{ marginBottom: '0' }}>
          {!isLast && (
            <Link to={'/'+nextPage} rel="next">
              Older →
            </Link>
          )}
          </li>
        </ul>
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
