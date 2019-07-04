import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import './sortbar.css'

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
      filterProducts: this.props.products,
      toggle: 'Ascending',
      byPrice: 'All',
      searchText: ''
    }

    this.nameSearchInput = React.createRef();
  }

  ////////////////////////////////
  //STATE MODIFYING FUNCTIONS
  ////////////////////////////////


  componentDidUpdate() {
    //Mount component 
    if (this.state.didMount == false) {
      this.mount()
    }

    //On State change, submit to redux store
    this.props.submitFilterProducts(this.state.filterProducts)
  }

  mount() {
    this.setState({
      filteredProducts: this.props.products,
      didMount: true
    })
    this.update(this.props.products)
    this.filter()
  }

  reset() {
    const currentFilterProducts = this.props.products
    this.update(currentFilterProducts)
    this.setState({
      filterProducts: this.props.products
    })
  }

  update(currentFilterProducts) {
    this.setState({
      filterProducts: currentFilterProducts
    })
  }


  ///////////////////////////////
  //SORTING AND SEARCH AND FILTERS
  //////////////////////////////
  filter(searchText = this.state.searchText, toggle = this.state.toggle, byPrice = this.state.byPrice) {
    var currentFilterProducts = this.props.products
    //SEARCH INPUT BY NAME
    if (searchText !== null) {
      const target = currentFilterProducts;
      let newList = target.filter(item => {
        const lc = item.name.toString().toLowerCase();
        const filter = searchText.toLowerCase();
        return lc.includes(filter);
      })
      currentFilterProducts = newList
    }

    //SORT BY PRICE
    if (toggle === "Ascending") {
      const ascending = currentFilterProducts.sort((a, b) => {
        return a.price - b.price
      })
      currentFilterProducts = ascending
    } else if (toggle === "Descending") {
      const descending = currentFilterProducts.sort((a, b) => {
        return b.price - a.price
      })
      currentFilterProducts = descending
    }

    //FILTER BY PRICE RANGE
    if (byPrice !== "All") {
      const target = currentFilterProducts;
      const buttonState = byPrice

      if (buttonState === 'below60k') {
        const price = target.filter(product => (product.price < 60000))
        currentFilterProducts = price
      } else if (buttonState === '60kto100k') {
        const price2 = target.filter(product => (product.price >= 60000 && product.price <= 100000))
        currentFilterProducts = price2
      } else if (buttonState === 'above100k') {
        const price3 = target.filter(product => (product.price > 100000))
        currentFilterProducts = price3
      }
    }
    this.update(currentFilterProducts)
  }

  //////////////////////
  //UI STATES
  /////////////////////
  toggleClick(event) {
    const target = event.target;
    const targetValue = target.value;


    if (targetValue === "Ascending") {
      var newValue = "Descending"
    } else {
      var newValue = "Ascending"
    }
    this.setState({
      toggle: newValue
    })
    this.filter(undefined, newValue, undefined)
  }

  changeRadio(event) {
    const target = event.target
    const targetName = target.value

    this.setState({
      byPrice: targetName
    })
    this.filter(undefined, undefined, targetName)
  }

  changeSearchText(event) {
    //If the user removes all search intention, we update and reset the filterProducts
    const newText = event.target.value;
    this.setState({
      searchText: newText
    })
    if (newText === "") {
      this.reset();
    } else {
      this.filter(newText, undefined, undefined)
    }
  }

  render() {
    return (
      <React.Fragment>
        <form id="sortBar">
          <ul>
            <li>
              <p>By order:</p>
              <button id="sortToggle" type="button" value={this.state.toggle} onClick={event => this.toggleClick(event)}>{this.state.toggle}</button>
            </li>

            <p>By price range:</p>
            <li>

              <input type="radio" name="sortRadio" value="all" onChange={event => this.changeRadio(event)}></input>
              <label htmlFor="option 1">All</label>
            </li>


            <li>
              <input type="radio" name="sortRadio" value="below60k" onChange={event => this.changeRadio(event)}></input>
              <label htmlFor="option 2">Below 60,000 VND</label>
            </li>
            <li>
              <input type="radio" name="sortRadio" value="60kto100k" onChange={event => this.changeRadio(event)}></input>
              <label htmlFor="option 3">Between 60,000VND to 100,000VND</label>
            </li>
            <li>
              <input type="radio" name="sortRadio" value="above100k" onChange={event => this.changeRadio(event)}></input>
              <label htmlFor="option 4">Above 100,000VND</label>
            </li>
            <p>By name:</p>
            <li>
              <input
                type="text"
                placeholder='Find your product with joy here'
                ref={this.nameSearchInput}
                onChange={event => this.changeSearchText(event)}
              />
            </li>
          </ul>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    submitFilterProducts: (currentFilterProducts) => {
      dispatch(actions.filterProducts(currentFilterProducts))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBar)