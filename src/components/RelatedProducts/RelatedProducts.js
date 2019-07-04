import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import ProductItem from '../ProductItem/index'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfProducts: 3, // number of displayed products
      class: "sm", // leave blank if you want product tags to have normal size
      stateRelatedProducts: this.props.relatedProducts,
    }
  }

  randomItem = () => {
    const relatedProducts = this.props.relatedProducts
    const randomItem = relatedProducts[Math.floor(Math.random() * relatedProducts.length)];

    return randomItem
  }

  componentDidMount() {
    console.log(this.state)
  }

  stateItems = () => {

    for (var i = 0; i < this.state.numberOfProducts; i++) {
      const randomItem = this.randomItem();
      this.setState({
        stateRelatedProducts: randomItem
      })

    }

  }

  render() {
    const { viewDetails, addProduct } = this.props
    return (
      < div id="relatedProducts" >
        {this.stateItems()}
        {this.state.stateRelatedProducts.map(product => (
          <ProductItem id={product.id} viewDetails={() => { viewDetails(product) }} onClick={() => { addProduct(product) }} name={product.name} price={product.price} productImg={product.img} />
        ))}
      </div >

    )
  }
}

const mapStateToProps = state => {
  return {
    relatedProducts: state.filteredProducts
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProducts)