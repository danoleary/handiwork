import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

function buildImage(data, category, title) {
  return (
    <article className="tile is-child">
      <Link to={`/${category}`}>
          <Img
            fluid={
              data.allContentfulAsset.edges.filter(
                x => x.node.title === category
              )[0].node.fluid
            }
          />
      </Link>
    </article>
  )
}

export default ({ data }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-8">
        {buildImage(data, 'artprints', 'ART PRINTS')}
      </div>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {buildImage(data, 'phonecases', 'PHONE CASES')}
            {buildImage(data, 'notebooks', 'NOTEBOOKS')}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulAsset(filter: { description: { eq: "homepage" } }) {
      edges {
        node {
          title
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
`
