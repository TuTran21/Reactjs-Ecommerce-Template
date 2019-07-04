import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import './LoginModal2.css'

const modalNameSetup = 'Login'
const LoginCheck = () => {

}

function LoginOrRegister(props) {
  const { modalState, modalName, changeModalState } = props
  if (modalState === true) {
    return (
      <React.Fragment>
        <div className={["form loginBox"]}>
          <form method="" action="" acceptCharset="UTF-8">
            <input id="email" className="form-control" type="text" placeholder="Email" name="email"></input>
            <input id="password" className="form-control" type="password" placeholder="Password" name="password"></input>
            <input className="btn btn-default btn-login" type="button" value="Login" ></input>
          </form>
        </div>

        <div className="modal-footer">
          <div className={["forgot login-footer"]}>
            <span>Looking to
            <p onClick={() => { changeModalState(modalName) }}> &nbsp;create an account</p>
              ?</span>

          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div className={["content registerBox"]}>
          <div className="form">
            <form method="" html="{:multipart=>true}" data-remote="true" action="" acceptCharset="UTF-8">
              <input id="email" className="form-control" type="text" placeholder="Email" name="email"></input>
              <input id="password" className="form-control" type="password" placeholder="Password" name="password"></input>
              <input id="password_confirmation" className="form-control" type="password" placeholder="Repeat Password"
                name="password_confirmation"></input>
              <input className="btn btn-default btn-register" type="button" value="Create account" name="commit"></input>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <div className={"forgot register-footer"}>
            <span>Already have an account?
            <p
                onClick={() => { changeModalState(modalName) }} >&nbsp; Login</p>
            </span>
          </div>
        </div>
      </React.Fragment>
    )

  }
}

function LoginModal2(props) {
  const { modalName, isShow, hideModal, modalState, changeModalState } = props

  if (isShow === true) {
    return (
      <div className="login fadeModal" id="loginModal">
        <div className="modal-dialog login animated">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" onClick={() => { hideModal(modalName) }}>&times;</button>

            </div>

            <div className="modal-body">
              <h4 className="modal-title">Login with</h4>
              <div className="box">
                <div className="content">
                  <div className="social">
                    <a className="circle github" href="javascript:void(0)">
                      <i className="fab fa-github"></i>
                    </a>
                    <a id="google_login" className="circle google" href="javascript:void(0)">
                      <i className="fab fa-google"></i>
                    </a>
                    <a id="facebook_login" className="circle facebook" href="javascript:void(0)">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="division">
                    <div className="line l"></div>
                    <span>or</span>
                    <div className="line r"></div>
                  </div>
                  <div className="error"></div>


                </div>
              </div>
              <div className="box">
                <LoginOrRegister
                  modalState={modalState}
                  changeModalState={() => { changeModalState(modalName) }}
                  modalName={modalName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else
    return null

}

const mapStateToProps = state => {
  const getModalName = state.modal
  const getModalNameIndex = getModalName.findIndex(x => x.modalName === modalNameSetup);
  return {

    modal: state.modal,
    modalName: state.modal[getModalNameIndex].modalName,
    isShow: state.modal[getModalNameIndex].isShow,
    hideModal: state.modal[getModalNameIndex].hideModal,
    modalState: state.modal[getModalNameIndex].modalState
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    hideModal: modalName => {
      dispatch(actions.hideModal(modalName))
    },

    changeModalState: modalName => {
      dispatch(actions.changeModalState(modalName))
    },

    logIn: (username, password) => {
      dispatch(actions.changeModalState(username, password))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal2)
