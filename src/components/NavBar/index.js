import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import LoginButton2 from '../LoginModal/LoginButton2'
import './index.css'
import ShoppingCartButton from '../ShoppingCart/ShoppingCartButton/ShoppingCartButton';
function NavBar(props) {
  // eslint-disable-next-line no-restricted-globals
  const { isAuth } = props
  const activePage = window.location.pathname.split('/')[1]
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar" role="navigation">
        <div className="container">

          <a className="navbar-brand waves-effect" href="">
            <strong className="blue-text">Oceanic</strong>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={[activePage === '' ? 'active' : '', 'nav-item'].join(' ')}>
                <Link className="nav-link waves-effect" to="/">Home</Link>
              </li>
              <li className={[activePage === 'about' ? 'active' : '', 'nav-item'].join(' ')}>
                <Link className="nav-link waves-effect" to="/about">About</Link>
              </li>
            </ul>


            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <ShoppingCartButton></ShoppingCartButton>
              </li>
            </ul>

            <LoginButton2 isAuth={isAuth}></LoginButton2>

          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

// Khi muốn xài state
const mapStateToProps = state => {
  return {
    shoppingCartLength: state.shoppingCart.length,
    activePage: state.activePage,
    isAuth: state.isAtuh
  }
}

// Khi muốn xài actions

export default withRouter(connect(
  mapStateToProps,
  null
)(NavBar))
