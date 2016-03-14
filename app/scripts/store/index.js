//@flow
import {createStore, applyMiddleware} from 'redux'
import todoReducers from '../reducers'
import {fetchTodos} from '../actions'
import thunkMiddleware from 'redux-thunk'

const store = createStore(todoReducers,
                          applyMiddleware(thunkMiddleware))

export default store
