import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

export default props => (
  <div className="tile is-parent is-4" key={props.product.id}>
    <article className="tile is-child">
      <Link to={`/${props.product.category}/${props.product.title}`}>
        <Img fluid={props.product.image.fluid} />
        <p
          className="subtitle is-size-7 has-text-centered has-text-grey is-uppercase"
          style={{ paddingTop: '10px' }}
        >
          {props.product.label}
        </p>
      </Link>
    </article>
  </div>
)
