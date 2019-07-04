import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import './LoginModal2.css'

function LoginButton2(props) {
  const { showModal, isAuth } = props
  if (isAuth === true) {
    return
  } else {
    const modalName = "Login"

    return (
      <React.Fragment>
        <button id='login-button' onClick={() => { showModal(modalName) }}>
          <i className="fas fa-user inline"></i>
          <p className="username inline">{modalName}</p>
        </button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: modalName => {
      dispatch(actions.showModal(modalName))
    },
    hideModal: modalName => {
      dispatch(actions.hideModal(modalName))
    },


  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton2)
