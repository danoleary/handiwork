import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import artPrints from '../images/artprints.jpg'
import notebooks from '../images/notebooks.jpg'
import phoneCases from '../images/phonecases.jpg'

const IndexPage = () => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-8">
        <div className="tile is-child">
    
            <figure className="image">
            <p className="is-overlay is-size-7">ART PRINTS</p>
              <img src={artPrints} />
            </figure>
         
        </div>
      </div>

      <div className="tile is-vertical is-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child">
                <figure className="image">
                  <p className="is-overlay is-size-7">PHONE CASES</p>
                  <img src={phoneCases} />
                </figure>
            </div>
            <div className="tile is-child">
                <figure className="image">
                <p className="is-overlay is-size-7">NOTEBOOKS</p>
                  <img src={notebooks} />
                </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
