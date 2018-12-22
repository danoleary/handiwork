import React from 'react'
import Layout from '../components/layout'
import CategoryTile from '../components/categorytile'

export default ({ pageContext: { products } }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile" style={{ 'flexWrap': 'wrap' }}>
          {products.map(x => <CategoryTile product={x} />)}
        </div>
      </div>
    </div>
  </Layout>
)
