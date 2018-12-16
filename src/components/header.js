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
        file(relativePath: { eq: "handiwork-logo.jpeg" }) {
          childImageSharp {
            fixed(width: 150, height: 50) {
              src
              width
              height
              srcSet
            }
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
            <Link to="/" className="navbar-item header-logo" style={{'padding-left': '50px'}}>
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
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
            <div className="navbar-end" style={{'padding-right': '50px'}}>
              <div className="navbar-item has-dropdown is-hoverable">
                <HeaderLink category="artprints" label="SHOP" />
                <div className="navbar-dropdown">
                  <HeaderLink category="artprints" label="ART PRINTS" />
                  <HeaderLink category="notebooks" label="NOTEBOOKS" />
                  <HeaderLink category="phonecases" label="PHONE CASES" />
                </div>
              </div>
              <HeaderLink category="contact" label="CONTACT" />
              <HeaderLink category="notebooks" label="CART" />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)
