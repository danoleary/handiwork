const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulOptiongroup {
        edges {
         node {
           id
           description
           options {
             id
             name
             price
           }
         }
       }
     }
      allContentfulProduct {
        edges {
          node {
            id
            title
            description
            options {
              id
            }
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
              description
              options {
                id
              }
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
            optionGroup: result.data.allContentfulOptiongroup.edges
              .filter(x => x.node.id === node.options.id)[0].node,
            image: node.image.fluid,
            description: node.description
          },
        })
      })
      resolve()
    })
  })
}
