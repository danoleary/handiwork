import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: props.pageContext.optionGroup.options[0],
      quantity: 1,
    }

    this.selectOption = this.selectOption.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
  }

  selectOption(e) {
    this.setState({
      selectedOption: this.props.pageContext.optionGroup.options.filter(x => x.id === e.target.value)[0]
    });
  }
  
  setQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className="columns custom-columns">
          <div className="column is-two-fifths">
            <p
              className="title has-text-centered is-uppercase has-text-dark-grey is-hidden-touch"
              style={{ paddingTop: '100px' }}
            >
              {this.props.pageContext.title}
            </p>
            <form>
              <div className="field">
                <label className="label">{this.props.pageContext.optionGroup.description}</label>
                <div className="control">
                  <div className="select">
                    <select onChange={this.selectOption}>
                      {this.props.pageContext.optionGroup.options.map(x => (
                        <option id={x.id} value={x.id}>{x.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Quantity</label>
                <div className="control">
                  <input
                    onInput={this.setQuantity}
                    className="input"
                    type="number"
                    value={this.state.quantity}
                  />
                </div>
              </div>
            </form>
            <p
              className="title has-text-centered is-uppercase has-text-dark-grey is-hidden-touch"
              style={{ paddingTop: '100px' }}
            >
            £{this.state.selectedOption.price.toFixed(2)}
            </p>
            <p
              className="title has-text-centered is-uppercase has-text-dark-grey is-hidden-touch"
              style={{ paddingTop: '100px' }}
            >
              {this.props.pageContext.description}
            </p>
            <div className="has-text-centered" style={{ paddingTop: '50px' }}>
              <button
                className="button is-large is-outlined snipcart-add-item"
                data-item-id={this.props.pageContext.id}
                data-item-name="Bacon"
                data-item-price={this.state.selectedOption.price.toFixed(2)}
                data-item-weight="20"
                data-item-url="http://myapp.com/products/bacon"
                data-item-description={this.props.pageContext.title}
              >
                <p className="is-size-7 has-text-black">ADD TO CART</p>
              </button>
            </div>
          </div>

          <div className="column">
            <p className="title has-text-centered is-uppercase has-text-dark-grey is-hidden-desktop">
              {this.props.pageContext.title}
            </p>
            <Img fluid={this.props.pageContext.image} />
            <p className="has-text-centered is-uppercase has-text-dark-grey is-hidden-desktop">
              £{this.state.selectedOption.price.toFixed(2)}
            </p>
            <p className="has-text-centered is-uppercase has-text-dark-grey is-hidden-desktop">
              {this.props.pageContext.description}
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Product
