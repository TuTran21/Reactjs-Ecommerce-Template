import React from 'react'
import './index.css'

function Button(props) {
  const { text, onClick, checkout } = props
  // const text = props.text
  // const onClick = props.onClick
  // const checkout = props.checkout
  const className = checkout ? 'btn checkout' : 'btn'
  return <button className={[className, props.className].join(' ')} onClick={onClick} > {text}</button >
}

export default Button