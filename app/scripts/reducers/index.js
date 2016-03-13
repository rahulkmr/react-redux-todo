//@flow
import {combineReducers} from 'redux'
import visibilityFilter from './visibilityFilter'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../actions'
import {SHOW_ALL} from '../constants'

const todos = (state = [], action) => {
  switch (action.type) {
      case ADD_TODO:
          return [
            ...state,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
          ]
      case TOGGLE_TODO:
          return state.map(t => {
            if (t.id !== action.id)
              return t
            return Object.assign({}, t, {completed: !t.completed})
          })
      default:
          return state
  }
}

const visibilityFilter = (state=SHOW_ALL, action) => {
  switch (action.type) {
      case SET_VISIBILITY_FILTER:
          return action.filter
      default:
          return state
  }
}

const todoReducers = combineReducers({
  todos,
  visibilityFilter
})

export default todoReducers
