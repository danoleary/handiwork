import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
import '../styles/index.scss'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
              rel: 'stylesheet',
              type: 'text/css',
            },
          ]}
          script={[
            {
              type: 'text/javascript',
              url: '',
              id: 'snipcart',
              'data-api-key':
                'YjFmMjliNWUtMmVmMi00MzFhLTk3NDAtYTEwZTAwYzc4ZmNhNjM2Nzk0NzQwNTQwOTEzODgw',
              src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
            },
            {
              type: 'text/javascript',
              src:
                'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
            },
          ]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Montserrat',
              rel: 'stylesheet',
              type: 'text/css',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" style={{'padding-top': '50px'}}>{children}</div>
        <footer className="footer">
          <div className="content has-text-centered" style={{'padding-top': '50px;'}}>
            <p>
              <Link to="shipping"><p className="is-size-7 has-text-grey-dark">SHIPPING + RETURNS</p></Link>
            </p>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
