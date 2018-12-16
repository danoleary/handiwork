import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ pageContext: { label, price, id, image } }) => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child">
          <div className="content" style={{ 'padding-top': '100px' }}>
            <p className="title has-text-centered is-uppercase has-text-dark-grey">
              {label}
            </p>
            <p
              className="subtitle has-text-centered is-uppercase has-text-dark-grey"
              style={{ 'padding-top': '50px' }}
            >
              £{price}
            </p>
            <div className="has-text-centered" style={{ 'padding-top': '50px' }}>
            <button className="button is-large is-outlined snipcart-add-item"
              data-item-id={id}
              data-item-name="Bacon"
              data-item-price={price}
              data-item-weight="20"
              data-item-url="http://myapp.com/products/bacon"
              data-item-description={label}
            ><p className="is-size-7 has-text-black">ADD TO CART</p></button>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <Img fluid={image} />
        </article>
      </div>
    </div>
  </Layout>
)