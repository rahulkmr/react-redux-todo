//@flow
import {createStore} from 'redux'
import todoReducers from '../reducers'
import {startFetch} from '../actions'

const store = createStore(todoReducers)
startFetch(store)

export default store
