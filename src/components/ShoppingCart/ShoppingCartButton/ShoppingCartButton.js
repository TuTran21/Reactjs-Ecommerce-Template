import React from 'react'
import ShoppingCartDropdown from '../ShoppingCartDropdown/ShoppingCartDropdown'
import { connect } from 'react-redux'
import '../ShoppingCartDropdown.css'
import { FaShoppingCart } from 'react-icons/fa'


class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  activeHandler = () => {
    const currentActive = this.state.active
    const newActive = !currentActive
    this.setState({
      active: newActive
    })
  }

  render() {
    const shoppingCart = this.props.shoppingCart
    const shoppingCartLength = shoppingCart.length
    return (
      <React.Fragment>
        <a id="shoppingCart-button" className="nav-link waves-effect" onClick={this.activeHandler}>
          <FaShoppingCart />
          <span class="shopping-cart clearfix d-none d-sm-inline-block"><span class="badge red z-depth-1 ml-1"> {shoppingCartLength} </span></span>
        </a>
        <ShoppingCartDropdown key={shoppingCart} shoppingCart={shoppingCart} active={this.state.active}></ShoppingCartDropdown>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}


export default connect(
  mapStateToProps,
  null
)(ShoppingCartButton)