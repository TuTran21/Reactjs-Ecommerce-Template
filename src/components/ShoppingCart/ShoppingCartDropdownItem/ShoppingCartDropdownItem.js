import React from 'react'
import '../ShoppingCartDropdown.css'

class ShoppingCartDropdownItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({
        product: this.props.product
      });
    }
  }

  render() {
    const product = this.state.product
    const productImg = product.img
    const productPrice = product.price
    const productName = product.name
    const productQuantity = product.quantity
    return (
      <div className="shopping-dropdownItem row">
        <div className="col-2">
          <img className="product-img" src={productImg}></img>
        </div>
        <div className="product-info col-9">
          <p className="product-name">{productName}</p>
          <p className="product-price">{productPrice}</p>
          <div className="quantity-control">
            <span className="amount">Amount:</span>
            <span>{productQuantity}</span>

          </div>
        </div>
      </div>
    )
  }

}

export default ShoppingCartDropdownItem