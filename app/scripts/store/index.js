//@flow
import {createStore, applyMiddleware} from 'redux'
import todoReducers from '../reducers'
import {fetchTodos} from '../actions'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()

const store = createStore(todoReducers,
                          applyMiddleware(thunkMiddleware, logger))

export default store
