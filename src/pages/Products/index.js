import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import ProductList from '../../components/ProductList'
import SortBar from '../../components/SortBar/SortBar'
import './products.css'

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products
    }
  }

  componentDidMount() {
    console.log(this.props.products)
  }

  componentDidUpdate() {
    if (this.state.products !== this.props.filteredProducts) {
      this.setState({
        products: this.props.filteredProducts
      });
    }
  }


  render() {
    // props.getProducts()
    return (

      <div id="product-container">
        <SortBar
        />

        <ProductList
          key={this.props.filteredProducts}
          products={this.props.filteredProducts}
          onClick={this.props.addProduct}
          viewDetails={this.props.viewDetails}
        />
      </div>

    )
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      dispatch(actions.addProduct(product))
    },
    viewDetails: product => {
      dispatch(actions.viewDetails(product))
    },
  }
}

const mapStateToProps = state => {
  return {
    filteredProducts: state.filteredProducts,
    products: state.products,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
