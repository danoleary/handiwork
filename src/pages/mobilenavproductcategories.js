import React from 'react'
import { Link } from 'gatsby'
import MobileNavLink from '../components/mobilenavlink'
import Layout from '../components/layout'

export default (props) => (
  <Layout location={props.location}>
    <Link
      to={`/mobilenav`}
      className="navbar-item is-size-6 has-text-grey"
      style={{ 'textAlign': 'center' }}
    >
      back
    </Link>
    <MobileNavLink link="/artprints" label="ART PRINTS" />
    <MobileNavLink link="/notebooks" label="NOTEBOOKS" />
    <MobileNavLink link="/phonecases" label="PHONE CASES" />
  </Layout>
)
