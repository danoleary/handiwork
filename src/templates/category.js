import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

function buildTile(product) {
  return (
    <div className="tile is-parent is-4" key={product.id}>
      <article className="tile is-child">
        <Link to={`/${product.category}/${product.title}`}>
          <Img fluid={product.image.fluid} />
          <p
            className="subtitle is-size-7 has-text-centered has-text-grey is-uppercase"
            style={{ paddingTop: '10px' }}
          >
            {product.label}
          </p>
        </Link>
      </article>
    </div>
  )
}
export default ({ pageContext: { products } }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile" style={{ 'flexWrap': 'wrap' }}>
          {products.map(x => buildTile(x))}
        </div>
      </div>
    </div>
  </Layout>
)
