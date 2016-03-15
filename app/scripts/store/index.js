//@flow
import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'

const logger = createLogger()
const store = createStore(reducers,
                          applyMiddleware(thunkMiddleware, logger))

export default store
