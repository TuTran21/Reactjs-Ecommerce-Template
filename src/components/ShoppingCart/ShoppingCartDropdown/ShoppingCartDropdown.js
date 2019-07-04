import React from 'react'
import ShoppingCartDropdownItem from '../ShoppingCartDropdownItem/ShoppingCartDropdownItem'
import '../ShoppingCartDropdown.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class ShoppingCartDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
      shoppingCart: this.props.shoppingCart
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.setState({
        active: this.props.active
      });
    }

    if (prevProps.shoppingCart !== this.props.shoppingCart) {
      this.setState({
        shoppingCart: this.props.shoppingCart
      });
    }
  }

  render() {
    const { active, shoppingCart } = this.props
    const shoppingCartLength = shoppingCart.length
    if (shoppingCartLength === 0) {
      return (
        <div id="shopping-dropdown" className={active ? 'active' : 'inactive' + ' ' + 'container'}>

          <p className="empty-message">No products in cart yet!</p>
        </div>
      )
    } else {
      return (
        <div id="shopping-dropdown" className={active ? 'active' : 'inactive' + ' ' + 'container'}>
          {shoppingCart.map(product => (
            <ShoppingCartDropdownItem key={product.id} product={product}></ShoppingCartDropdownItem>
          ))}

          <div className="hr" />
          <div id="shopping-navigate">
            <Link className="nav-link waves-effect p-0" to="/checkout"><button className="btn checkout ">Proceed to Checkout</button></Link>
            <button className="btn btn-primary checkout">Proceed to payment</button>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(ShoppingCartDropdown)