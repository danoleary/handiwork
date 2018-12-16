import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

function buildImage(images, category, label) {
  return (
    <article className="tile is-child">
      <Link to={`/${category}`}>
        <figure className="image">
          <p className="is-overlay is-size-7 has-text-grey">{label}</p>
          <Img
            fluid={
              images.filter(x => x.node.name === category)[0].node
                .childImageSharp.fluid
            }
          />
        </figure>
      </Link>
    </article>
  )
}

export default ({ data }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-7">
        {buildImage(data.allFile.edges, 'artprints', 'ART PRINTS')}
      </div>
      <div className="tile is-vertical is-5">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {buildImage(data.allFile.edges, 'phonecases', 'PHONE CASES')}
            {buildImage(data.allFile.edges, 'notebooks', 'NOTEBOOKS')}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "homepage" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`
