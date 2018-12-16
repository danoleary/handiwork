const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProductsJson {
          group(field: category) {
            fieldValue
            totalCount
            edges {
              node {
                label
                id
                price
                category
                image {
                  childImageSharp {
                    fluid(maxWidth: 380)  {
                      src
                      srcSet
                      aspectRatio
                      sizes
                    }
                  }
                }
              }
            }
          }
          edges {
            node {
              category
              label
              price
              id
              image {
                childImageSharp {
                  fluid(maxWidth: 380)  {
                    src
                    srcSet
                    aspectRatio
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allProductsJson.group.forEach(x => {
        createPage({
            path: `${x.fieldValue}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              products: x.edges.map(e => e.node)
            },
          })
      })
      result.data.allProductsJson.edges.forEach(({ node }) => {
        createPage({
          path: `${node.category.toLowerCase()}/${node.label.toLowerCase()}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            label: node.label,
            id: node.id,
            price: node.price,
            image: node.image.childImageSharp.fluid
          },
        })
      })
      resolve()
    })
  })
}
