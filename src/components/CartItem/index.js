import React from 'react'
import Button from '../Button'
import './index.css'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.quantityEl = React.createRef()
  }

  onInputChange = e => {
    if (this.quantityEl.current.value < 0) {
      this.quantityEl.current.value = 0;
    }
    this.props.changeQuantity(
      this.props.id,
      this.quantityEl.current.value
    )
  }

  render() {
    const { name, price, quantity, onDelete } = this.props
    return (
      <li className="product-item">
        <span>{name}</span>
        <span>{price}USD</span>
        <input
          ref={this.quantityEl}
          onChange={this.onInputChange}
          className="quantity"
          type="number"
          defaultValue={quantity}
        />
        <Button onClick={onDelete} text="X" />
      </li>
    )
  }
}

export default CartItem
