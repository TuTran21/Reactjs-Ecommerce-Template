import React from 'react'
import ProductItem from '../ProductItem'
import './index.css'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products
    }
  }

  render() {
    const { onClick, viewDetails } = this.props
    const products = this.props.products
    if (products.length === 0) {
      return (
        <div className="product-list">
          <p>No matching products were found</p>
        </div>
      )
    } else {
      return (

        <div className="product-list">
          {products.map(product => (
            <ProductItem key={product.id} id={product.id} viewDetails={() => { viewDetails(product) }} onClick={() => { onClick(product) }} name={product.name} price={product.price} productImg={product.img} />
          ))}
        </div>
      )
    }
  }
}

export default ProductList
