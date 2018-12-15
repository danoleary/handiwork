import React from 'react'
import { Link } from 'gatsby'

const HomePageLink = props => (
  <div className="tile is-child">
    <Link
      to={props.category}
      state={{
        category: props.category,
      }}
    >
      <figure className="image">
        <p className="is-overlay is-size-7 homepagelabel has-text-grey">
          {props.label}
        </p>
        <img src={'../images/artprints/mix.jpg'} />
      </figure>
    </Link>
  </div>
)

export default HomePageLink
