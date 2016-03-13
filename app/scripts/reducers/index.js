//@flow

import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoReducers = combineReducers({
  todos,
  visibilityFilter
})

export default todoReducers
