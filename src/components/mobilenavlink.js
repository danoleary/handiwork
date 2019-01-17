import { Link } from 'gatsby'
import React from 'react'

export default props => (
  <Link to={`/${props.link}`} className="navbar-item is-size-8 has-text-black" style={{'textAlign':'center'}} >
    {props.label}
  </Link>
)
