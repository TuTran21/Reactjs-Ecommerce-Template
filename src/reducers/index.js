import {
  LOG_IN,
  ADD_PRODUCT_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_CART_QUANTITY,
  CHECKOUT,
  NAVIGATE,
  SETPRODUCTS,
  SHOW_MODAL,
  HIDE_MODAL,
  CHANGE_MODAL_STATE,
  FILTER_PRODUCTS,
  VIEW_DETAILS,
  COMMENT_LIKE,
  COMMENT_DISLIKE,
  PUBLISH_COMMENT
} from '../actions'

const initialState = {
  activePage: 'about',
  user: [
    {
      username: 'admin',
      password: '123'
    },
    {
      username: '',
      password: ''
    }
  ]
  ,
  currentUser: {
    username: 'admin',
    profilePic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC',
  },
  comments: [
    {
      id: 0,
      username: 'Michael Jackson',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXDUSlcnGeF1D5ALpT5bQzGWsEFdoKJQ0lDOTtRLOhMlgJDa2Ow',
      content: 'This is a very nice product, package is clean and carefully done',
      date: '25/03/1995',
      likes: 25,
      activeBtn: '',
    },
    {
      id: 1,
      username: 'Steve Rogers',
      profilePic: 'https://66.media.tumblr.com/fa226c7440dcb6078cf382cec4068b44/tumblr_p84q7wSj8P1tk2oito3_250.png',
      content: 'I use this everytime i go out, and it is either useful and convenient',
      date: '25/03/2010',
      likes: 5,
      activeBtn: '',
    }
  ],
  filteredProducts: [{}],
  isAuth: false,
  productDetails: {},
  shoppingCart: [],
  successShoopingCart: [],
  modal: [
    {
      active: false
    },
    {
      modalName: 'Login',
      isShow: false,
      modalState: true //true = login, false = register
    },
    {
      modalName: 'Warning',
      isShow: false
    }
  ],

  products: [
    {
      id: '1',
      name: 'iPhone6',
      price: 650,
    },
    {
      id: '2',
      name: 'iPhone6 Plus',
      price: 700,
    },
    {
      id: '3',
      name: 'iPhone7',
      price: 750,
    },
    {
      id: '4',
      name: 'iPhone7 Plus',
      price: 800,
    },
  ],

}

const publishComment = (state, content, username, profilePic) => {
  const commentsLength = state.comments.length
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  date = mm + '/' + dd + '/' + yyyy;

  const newComment = {
    id: commentsLength + 1,
    username: username,
    profilePic: profilePic,
    content: content,
    date: date,
    likes: 0,
    activeBtn: ''
  }
  const newComments = [...state.comments]
  newComments[commentsLength] = newComment
  return {
    ...state,
    comments: newComments
  }
}

const commentLike = (state, id, activeBtn) => {
  const getCommentId = state.comments.findIndex(comment => comment.id === id)
  const comment = state.comments[getCommentId]
  const newComment = { ...comment, activeBtn, likes: comment.likes + 1 }
  const newComments = [...state.comments]
  newComments[getCommentId] = newComment
  return { ...state, comments: newComments }
}

const commentDislike = (state, id, activeBtn) => {
  const getCommentId = state.comments.findIndex(comment => comment.id === id)
  const comment = state.comments[getCommentId]
  const newComment = { ...comment, activeBtn, likes: comment.likes - 1 }
  const newComments = [...state.comments]
  newComments[getCommentId] = newComment
  return { ...state, comments: newComments }
}

const logInAuth = (state, username, password) => {

}

const filterProducts = (state, currentFilterProducts) => {
  return {
    ...state,
    filteredProducts: currentFilterProducts
  }
}

const viewDetails = (state, product) => {
  return {
    ...state,
    productDetails: product
  }
}
const showModal = (state, modalName) => {
  const getModalName = state.modal
  const getModalIndex = getModalName.findIndex(modal => modal.modalName === modalName)
  const modal = state.modal[getModalIndex]
  const newModal = { ...modal, isShow: true }
  const newModals = [...state.modal]
  newModals[getModalIndex] = newModal
  newModals[0] = { active: true }

  return {
    ...state,
    modal: newModals
  }

}

const hideModal = (state, modalName) => {
  const getModalName = state.modal
  const getModalIndex = getModalName.findIndex(modal => modal.modalName === modalName)
  const modal = state.modal[getModalIndex]
  const newModal = { ...modal, isShow: false }
  const newModals = [...state.modal]
  newModals[getModalIndex] = newModal
  newModals[0] = { active: false }

  return {
    ...state,
    modal: newModals
  }
}

const changeModalState = (state, modalName) => {
  const getModalName = state.modal
  const getModalIndex = getModalName.findIndex(modal => modal.modalName === modalName)
  const modal = state.modal[getModalIndex]
  const modalState = state.modal[getModalIndex].modalState
  const newModalState = !modalState
  const newModal = { ...modal, modalState: newModalState }
  const newModals = [...state.modal]
  newModals[getModalIndex] = newModal


  return {
    ...state,
    modal: newModals
  }

}

const addToCart = (state, product) => {
  const { products, shoppingCart } = state
  const productById = id => product => product.id === id
  const productToAdd = products.find(productById(product.id))
  const sameProductInCart = shoppingCart.find(productById(product.id))
  const newShoppingCart = [...shoppingCart]
  if (sameProductInCart) {
    sameProductInCart.quantity++
  } else {
    productToAdd.quantity = 1
    newShoppingCart.push(productToAdd)
  }
  return { ...state, shoppingCart: newShoppingCart }
}

const checkout = state => {
  const { shoppingCart, successShoopingCart } = state
  const newShoppingCart = []
  const newSuccessShoopingCart =
    successShoopingCart.length > 0
      ? [...successShoopingCart, shoppingCart]
      : [shoppingCart]
  const newAppState = {
    ...state,
    shoppingCart: newShoppingCart,
    successShoopingCart: newSuccessShoopingCart,
  }
  return newAppState
}

const changeQuantity = (state, id, newQuantity) => {
  if (newQuantity < 0) {
    newQuantity = 0
  }
  const byId = productId => item => item.id === productId
  const newShoppingCart = [...state.shoppingCart]
  const cartItemIdx = newShoppingCart.findIndex(byId(id))
  newShoppingCart[cartItemIdx] = {
    ...newShoppingCart[cartItemIdx],
    quantity: newQuantity,
  }
  return { ...state, shoppingCart: newShoppingCart }
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case PUBLISH_COMMENT:
      return publishComment(state,
        action.payload.content,
        action.payload.profilePic,
        action.payload.username)
    case COMMENT_DISLIKE:
      return commentDislike(state, action.payload.id, action.payload.activeBtn)
    case COMMENT_LIKE:
      return commentLike(state, action.payload.id, action.payload.activeBtn)
    case VIEW_DETAILS:
      return viewDetails(state, action.payload)
    case FILTER_PRODUCTS:
      return filterProducts(state, action.payload)
    case LOG_IN:
      const { username, password } = state
      return { ...state, user: action.payload }
    case SETPRODUCTS:
      console.log('SETPRODUCTS')
      return { ...state, products: action.payload }
    case ADD_PRODUCT_TO_CART:
      return addToCart(state, action.payload)
    case CHECKOUT:
      return checkout(state)
    case REMOVE_CART_ITEM:
      const { shoppingCart } = state
      const withoutDeletedItem = i => i.id !== action.payload.id
      const newShoppingCart = shoppingCart.filter(withoutDeletedItem)
      return { ...state, shoppingCart: newShoppingCart }
    case CHANGE_CART_QUANTITY:
      return changeQuantity(
        state,
        action.payload.id,
        action.payload.quantity
      )
    case SHOW_MODAL:
      return showModal(state, action.payload)
    case HIDE_MODAL:
      return hideModal(state, action.payload)
    case CHANGE_MODAL_STATE:
      return changeModalState(
        state,
        action.payload)

    case NAVIGATE:
      return { ...state, activePage: action.payload }
    default:
      return state
  }
}
