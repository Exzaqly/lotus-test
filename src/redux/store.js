import { auctionReducer } from './auctionReducer'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleWare from  'redux-thunk'

let rootReducer = combineReducers({
  auction: auctionReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
)

export default store