import React from "react"

import Link from "gatsby-link"
import Container from '../components/Container'

export default ({data}) =>
  <div>
    <h1>About</h1>
      <p>La plante</p>
      <p>{data.allFile.edges[0].node.prettySize}</p>
      <img src="http://www.footmercato.net/images/a/icardi-exhibe-son-maillot-apres-son-triple-contre-l-ac-milan_212296.jpg" alt="icardi"/>
      <Link to='/'>Home</Link>
  </div>

  export const query = graphql`
    query AboutQuery {
      allFile {
        edges {
          node {
            size
          	prettySize
          }
        }
      }
    }
  `
