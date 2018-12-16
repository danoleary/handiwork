const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            id
            title
            price
            category
            image {
              fluid {
                src
                srcSet
                sizes
                aspectRatio
              }
            }
          }
        }
        group(field: category) {
          fieldValue
          totalCount
          edges {
            node {
              title
              id
              price
              category
              image {
                fluid {
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
    }`).then(result => {
      result.data.allContentfulProduct.group.forEach(x => {
        createPage({
            path: `${x.fieldValue}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              products: x.edges.map(e => e.node)
            },
          })
      })
      result.data.allContentfulProduct.edges.forEach(({ node }) => {
        createPage({
          path: `${node.category.toLowerCase()}/${node.title.toLowerCase()}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            title: node.title,
            id: node.id,
            price: node.price,
            image: node.image.fluid
          },
        })
      })
      resolve()
    })
  })
}
