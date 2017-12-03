import React from 'react'

export default ({ children, data }) =>
  <div style={{margin: 'auto', maxWidth: 760}}>
    <h2>{data.site.siteMetadata.title}</h2>
    {children()}
    <footer>
      Copyright blablb abolajoa.
    </footer>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
