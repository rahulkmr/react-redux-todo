//@flow
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(reducers,
                          applyMiddleware(thunkMiddleware, logger))

export default store
