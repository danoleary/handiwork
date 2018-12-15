import React from 'react'
import Layout from '../components/layout'
import artPrints from '../images/artprints.jpg'
import notebooks from '../images/notebooks.jpg'
import phoneCases from '../images/phonecases.jpg'
import HomePageLink from '../components/homepagelink'

const IndexPage = () => (
  <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-8">
        <HomePageLink
          category="artprints"
          label="ART PRINTS"
          image={artPrints}
        />
      </div>
      <div className="tile is-vertical is-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <HomePageLink
              category="phonecases"
              label="PHONE CASES"
              image={phoneCases}
            />
            <HomePageLink
              category="notebooks"
              label="NOTEBOOKS"
              image={notebooks}
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
