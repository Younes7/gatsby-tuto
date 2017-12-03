import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

export default ({ data }) =>
  <div>
    <h1 className={styles.titre}>Titre</h1>
    <p>Salut c'est du texte.</p>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return <h2 key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
    })}
    <Link to='/about/'>About</Link>
    <br />
    <Link to='/tableDeMultiplication/'>Table</Link>
  </div>

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
