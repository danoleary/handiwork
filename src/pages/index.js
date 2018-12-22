import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import HomePageLink from '../components/homepagelink'

export default ({ data }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-7">
        <HomePageLink data={data} category='artprints' />
      </div>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <HomePageLink data={data} category='phonecases' />
            <HomePageLink data={data} category='notebooks' />
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
