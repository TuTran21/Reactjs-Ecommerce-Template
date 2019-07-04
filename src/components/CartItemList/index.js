import React from 'react'
import CartItem from '../CartItem'
import './index.css'

function CartList(props) {
  const {items, onDelete, changeQuantity} = props
  return (
    <ul>
      {items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onDelete={() => {
            onDelete(item)
          }}
          changeQuantity={changeQuantity}
        />
      ))}
    </ul>
  )
}

export default CartList
