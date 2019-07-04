import React from 'react'
import LoginModal2 from './LoginModal2';
import { connect } from 'react-redux'

function Modal(state) {
  const { modal } = state.state
  return (
    <div id="modal" className={modal[0].active ? 'active' : 'inactive'}>
      <LoginModal2></LoginModal2>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(Modal)