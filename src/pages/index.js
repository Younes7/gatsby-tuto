import React from "react"

import Link from "gatsby-link"
import styles from './index.module.css'

export default ({data}) =>
  <div>
    <h1 className={styles.titre}>Titre</h1>
      <p>Salut ca va ?</p>
      {data.allMarkdownRemark.edges.map(({ node },index) =>{
        return <h2 key={index}><link to={node.fiels.slug}>{node.frontmatter.title}</link></h2>
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
        fields{
          slug
        }
        id
        frontmatter {
          title
          date
        }
      }
    }
  }SS
}
`
