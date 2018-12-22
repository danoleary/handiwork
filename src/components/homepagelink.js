import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

export default (props) => (
    <article className="tile is-child">
      <Link to={`/${props.category}`}>
          <Img
            fluid={
                props.data.allContentfulAsset.edges.filter(
                x => x.node.title === props.category
              )[0].node.fluid
            }
          />
      </Link>
    </article>
  )