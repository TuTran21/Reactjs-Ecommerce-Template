import React from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import Button from '../../components/Button'
import CartItemList from '../../components/CartItemList'

function EmptyCartMessage() {
  return <h2>You've buy nothing, go shopping more ^^</h2>
}

function Checkout(props) {
  const {
    shoppingCart,
    checkout,
    removeCartItem,
    changeCartItemQuantity,
  } = props
  const emptyCart = shoppingCart.length === 0
  const totalPrice = shoppingCart.reduce((total, item) => {
    total = total + item.price * item.quantity
    return total
  }, 0)
  return (
    <div>
      {emptyCart ? (
        <EmptyCartMessage />
      ) : (
        <CartItemList
          items={shoppingCart}
          onDelete={removeCartItem}
          changeQuantity={changeCartItemQuantity}
        />
      )}
      {!emptyCart && <h3>Total: {totalPrice}</h3>}
      {!emptyCart && (
        <Button checkout text="Checkout" onClick={checkout} />
      )}
    </div>
  )
}

// Khi muốn xài state
const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart,
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    checkout: () => {
      dispatch(actions.checkout())
    },
    removeCartItem: id => {
      dispatch(actions.removeCartItem(id))
    },
    changeCartItemQuantity: (id,newQuantity) => {
      dispatch(actions.changeCartQuantity(id,newQuantity))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
