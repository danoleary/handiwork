import React from 'react'
import Layout from '../components/layout'

export default (props) => (
  <Layout location={props.location}>
    <div className="columns">
      <div className="column" />
      <div className="column is-half">
        <p
          className="has-text-centered has-text-black is-size-5"
          style={{ 'paddingTop': '100px' }}
        >
          {props.title}
        </p>
        <p
          className="is-size-6 has-text-centered has-text-grey"
          style={{ 'paddingTop': '80px' }}
        >
          {props.content}
        </p>
      </div>
      <div className="column" />
    </div>
  </Layout>
)
