import React from 'react'
import Button from '../Button'
import LinkButton from '../LinkButton/LinkButton'
import './index.css'

function ProductItem(props) {
  const { name, price, onClick, productImg, viewDetails, id } = props
  return (
    <div className="product">
      <div className="imgContainer">
        <img className="productImg" src={productImg}></img>

      </div>
      <h3 className="productName">{name}</h3>
      <span className="productPrice">{price} VND</span>
      <span className="d-flex flex-row">
        <Button className="btn-primary my-0 p waves-effect waves-light" onClick={onClick} text="Add to cart" />
        <LinkButton to={'/product' + '/' + id} id="productDetail" className="btn btn-info my-0 p waves-effect waves-light" onClick={viewDetails}>Details</LinkButton>
      </span>
    </div>

  )
}

export default ProductItem
