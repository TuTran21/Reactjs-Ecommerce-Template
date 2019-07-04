import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import ProductDetailsComp from '../../components/productDetailsComp/productDetails'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

function ProductDetails(props) {
  // props.getProducts()
  return (
    <React.Fragment>
      <ProductDetailsComp
        productDetails={props.productDetails}
        addProduct={props.addProduct}
      />
      <hr />
      {/* <RelatedProducts></RelatedProducts> */}
    </React.Fragment>
  )
}


// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      dispatch(actions.addProduct(product))
    }
  }
}

const mapStateToProps = state => {
  return {
    productDetails: state.productDetails
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails)
