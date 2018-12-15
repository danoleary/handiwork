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
                    fixed(width: 200, height: 200) {
                      src
                      width
                      height
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
                  fixed(width: 300, height: 450) {
                    src
                    width
                    height
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
          path: `${node.category}/${node.label}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            label: node.label,
            id: node.id,
            price: node.price,
            image: node.image.childImageSharp.fixed
          },
        })
      })
      resolve()
    })
  })
}
