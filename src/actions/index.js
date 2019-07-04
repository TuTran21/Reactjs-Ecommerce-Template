import { get } from '../api'
import axios from 'axios'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
export const NAVIGATE = 'NAVIGATE'
export const CHECKOUT = 'CHECKOUT'

export const SETPRODUCTS = 'SETPRODUCTS'
export const GETPRODUCTS = 'GETPRODUCTS'

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = "HIDE_MODAL"
export const CHANGE_MODAL_STATE = "CHANGE_MODAL_STATE"
export const LOG_IN = 'LOG_IN'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const VIEW_DETAILS = 'VIEW_DETAILS'
export const COMMENT_LIKE = "COMMENT_LIKE"
export const COMMENT_DISLIKE = "COMMENT_DISLIKE"
export const PUBLISH_COMMENT = "PUBLISH_COMMENT"

const logIn = (username, password) => {
  return {
    type: LOG_IN,
    payload: { username, password }
  }
}

const publishComment = (username, profilePic, content) => {
  return {
    type: PUBLISH_COMMENT,
    payload: { username, profilePic, content }
  }
}

const commentLike = (id, activeBtn) => {
  return {
    type: COMMENT_LIKE,
    payload: { id, activeBtn }
  }
}

const commentDislike = (id, activeBtn) => {
  return {
    type: COMMENT_DISLIKE,
    payload: { id, activeBtn }
  }
}

const showModal = modalName => {
  return {
    type: SHOW_MODAL,
    payload: modalName
  }
}

const changeModalState = (modalName) => {
  return {
    type: CHANGE_MODAL_STATE,
    payload: modalName
  }
}


const hideModal = modalName => {
  return {
    type: HIDE_MODAL,
    payload: modalName
  }
}

const filterProducts = filteredProducts => {
  return {
    type: FILTER_PRODUCTS,
    payload: filteredProducts
  }
}

const viewDetails = product => {
  return {
    type: VIEW_DETAILS,
    payload: product
  }
}

const setProducts = products => {
  return {
    type: SETPRODUCTS,
    payload: products,
  }
}

const getProducts = () => {
  return dispatch => {
    console.log('products Called')
    axios.get('https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=6')
      .then((x) => {
        const products = x.data.data.map(function (p) {
          return {
            id: p.product_id, name: p.name, price: p.price, img: p.img_url
          }
        })
        dispatch(setProducts(products))
      })
  }
}

const addProduct = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  }
}

const navigate = toPage => {
  return {
    type: NAVIGATE,
    payload: toPage,
  }
}

const checkout = () => {
  return { type: CHECKOUT }
}

const removeCartItem = id => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  }
}

const changeCartQuantity = (id, newQuantity) => {
  return {
    type: CHANGE_CART_QUANTITY,
    payload: { id, quantity: newQuantity },
  }
}

export default {
  logIn,
  setProducts,
  addProduct,
  navigate,
  checkout,
  removeCartItem,
  changeCartQuantity,
  getProducts,
  showModal,
  hideModal,
  changeModalState,
  filterProducts,
  viewDetails,
  commentDislike,
  commentLike,
  publishComment
}
