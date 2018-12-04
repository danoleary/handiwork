import PropTypes from 'prop-types'
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
        <a className="navbar-item" href="https://bulma.io">
          <img src={logo}  />
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
            <a className="navbar-link is-size-7">SHOP</a>
            <div className="navbar-dropdown">
              <a className="navbar-item is-size-7" >ART PRINTS</a>
              <a className="navbar-item is-size-7">NOTEBOOKS</a>
              <a className="navbar-item is-size-7">PHONE CASES</a>
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
