import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducerActions from './reducers/reducerActions'
import index from './reducers/index'


// const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
  posts: reducerActions
}),
  composeEnhancer(applyMiddleware(thunk))
)


export default store