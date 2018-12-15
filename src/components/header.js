import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import React from 'react'
import 'bulma/css/bulma.css'
import logo from '../images/handiwork-logo.jpeg'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <Link to="/">
            <img src={logo} />
          </Link>
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link
                to="/productcategory"
                className="navbar-link is-size-7"
                state={{
                  category: 'artPrints',
                }}
              >
                SHOP
              </Link>
            <div className="navbar-dropdown">
              <Link
                to="/productcategory"
                className="navbar-item is-size-7"
                state={{
                  category: 'artPrints',
                }}
              >
                ART PRINTS
              </Link>
              <Link
                to="/productcategory"
                className="navbar-item is-size-7"
                state={{
                  category: 'notebooks',
                }}
              >
                NOTEBOOKS
              </Link>
              <Link
                to="/productcategory"
                className="navbar-item is-size-7"
                state={{
                  category: 'phoneCases',
                }}
              >
                PHONE CASES
              </Link>
            </div>
          </div>
          <a className="navbar-item is-size-7">CONTACT</a>
          <a className="navbar-item is-size-7">CART</a>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
