import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ pageContext: { title, price, id, image } }, location) => (
  <Layout location={location}>
    <div className="columns custom-columns">
      <div className="column is-two-fifths" style={{ paddingTop: '100px' }}>
        <p className="title has-text-centered is-uppercase has-text-dark-grey">
          {title}
        </p>
        <p
          className="subtitle has-text-centered is-uppercase has-text-dark-grey"
          style={{ paddingTop: '50px' }}
        >
          £{price}
        </p>
        <div className="has-text-centered" style={{ paddingTop: '50px' }}>
          <button
            className="button is-large is-outlined snipcart-add-item"
            data-item-id={id}
            data-item-name="Bacon"
            data-item-price={price}
            data-item-weight="20"
            data-item-url="http://myapp.com/products/bacon"
            data-item-description={title}
          >
            <p className="is-size-7 has-text-black">ADD TO CART</p>
          </button>
        </div>
      </div>

      <div className="column">
        <Img fluid={image} />
      </div>
    </div>
  </Layout>
)
