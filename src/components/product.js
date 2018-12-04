import React from 'react'

const Product = props => (
  <div className="tile is-parent">
    <article className="tile is-child">
      <img src={props.src} />
      <p className="is-size-7 has-text-grey has-text-centered">{props.label}</p>
      <button
        className="snipcart-add-item"
        data-item-id="2"
        data-item-name="Bacon"
        data-item-price="3.00"
        data-item-weight="20"
        data-item-url="http://myapp.com/products/bacon"
        data-item-description="Some fresh bacon"
      >
        Buy bacon
      </button>
    </article>
  </div>
)

export default Product
