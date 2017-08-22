import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import valueReducer from './ducks/value'

const reducer = valueReducer

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)