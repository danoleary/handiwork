import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Product = props => (
  <div className="tile is-parent">
    <Link
      to={`/${
        props.productData.category
      }/${props.productData.label.toLowerCase()}`}
      state={{
        productData: props.productData,
      }}
    >
      <article className="tile is-child">
        <Img fixed={props.productData.image.childImageSharp.fixed} />
        <p className="is-size-7 has-text-grey has-text-centered">
          {props.productData.label}
        </p>
      </article>
    </Link>
  </div>
)

export default Product
