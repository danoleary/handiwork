import React from 'react'
import MobileNavLink from '../components/mobilenavlink'
import Layout from '../components/layout'

export default (props) => (
  <Layout location={props.location}>
    <MobileNavLink link="/mobilenavproductcategories" label="SHOP" />
    <MobileNavLink link="/contact" label="CONTACT" />
  </Layout>
)
