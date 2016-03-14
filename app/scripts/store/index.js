//@flow
import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import {routerReducer, syncHistoryWithStore} from 'react-router-redux'

const logger = createLogger()
const store = createStore(combineReducers({...reducers, routing: routerReducer}),
                          applyMiddleware(thunkMiddleware, logger))
export const history = syncHistoryWithStore(browserHistory, store)

export default store
