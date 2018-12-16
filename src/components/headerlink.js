import { Link } from 'gatsby'
import React from 'react'

export default (props) => (
    <Link to={`/${props.category}`} className="navbar-item is-size-7 has-text-black">
        {props.label}
      </Link>
  )