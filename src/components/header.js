import { Link } from 'gatsby'
import React from 'react'
import 'bulma/css/bulma.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import HeaderLink from './headerlink'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAsset(title: {eq: "handiwork-logo"}) {
          fixed(width: 150, height: 50) {
            src
            srcSet
            width
            height
          }
        }
      }
    `}
    render={data => (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item header-logo"
              style={{ 'paddingLeft': '50px' }}
            >
              <Img fixed={data.contentfulAsset.fixed} />
            </Link>
            <Link
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              to="mobilenav"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </Link>
            <Link
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              to="mobilenav"
            >
             EXIT
            </Link>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end" style={{ 'paddingRight': '50px' }}>
              <div className="navbar-item has-dropdown is-hoverable">
                <HeaderLink category="artprints" label="SHOP" />
                <div className="navbar-dropdown">
                  <HeaderLink category="artprints" label="ART PRINTS" />
                  <HeaderLink category="notebooks" label="NOTEBOOKS" />
                  <HeaderLink category="phonecases" label="PHONE CASES" />
                </div>
              </div>
              <HeaderLink category="contact" label="CONTACT" />
              <a href="#" className="snipcart-checkout navbar-item is-size-7 has-text-black">CART</a>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)
