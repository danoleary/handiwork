import React from 'react'
import Layout from '../components/layout'
import Product from '../components/product'

function productRow(productData) {
  var product = productData ? (
    <Product productData={productData} />
  ) : (
    <div />
  )

  return <div className="column">{product}</div>
}

function groupBy(arr, n) {
  var group = []
  for (var i = 0, end = arr.length / n; i < end; ++i)
    group.push(arr.slice(i * n, (i + 1) * n))
  return group
}

function buildRows(productData) {
  const numRows = productData.length / 3 + (productData.length % 3)
  const groups = groupBy(productData, 3)
  return Array.apply(null, { length: numRows - 1 })
    .map(Number.call, Number)
    .map(r => (
      <div className="columns">
        {[0, 1, 2].map(x => productRow(groups[r][x]))}
      </div>
    ))
}

export default ({ pageContext: { products } }) => (
  <Layout>
    {buildRows(products)}
  </Layout>
)
