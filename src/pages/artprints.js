import React from 'react'

import Layout from '../components/layout'
import Product from '../components/product'
import artPrintProductData from '../products/artPrintProductData'

const numRows = artPrintProductData.length / 3

function productRow(col, row) {
  const index = row === 0 ? 0 : row + col
  return (
    <Product
      src={artPrintProductData[index].image}
      label={artPrintProductData[index].label}
    />
  )
}

const rows = Array.from({ length: numRows }, (x, i) => i).map(r => (
  <div className="columns">
    <div className="column">{productRow(r, 0)}</div>
    <div className="column">{productRow(r, 1)}</div>
    <div className="column">{productRow(r, 2)}</div>
  </div>
))

const ArtPrints = () => <Layout>{rows}</Layout>

export default ArtPrints
