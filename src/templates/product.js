import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ pageContext: { label, price, id, image } }) => (
  <Layout>
    <div className="columns">
      <div className="column">
        <section className="section">
          <h1 className="title">{label.toUpperCase()}</h1>
          <h2 className="subtitle">£{price}</h2>
        </section>
        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-name="Bacon"
          data-item-price={price}
          data-item-weight="20"
          data-item-url="http://myapp.com/products/bacon"
          data-item-description={label}
        >
          ADD TO CART
        </button>
      </div>
      >
      <div className="column">
        <Img fixed={image} />
      </div>
    </div>
  </Layout>
)
