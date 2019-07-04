import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appState from './reducers/index.js'

const store = createStore(appState, applyMiddleware(thunk))

store.subscribe((arg) => {
  console.log('Action called', store.getState())
})

export default store