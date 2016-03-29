//@flow
import {combineReducers} from 'redux'
import {INITIALIZE, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, REMOVE_TODO} from '../actions'
import {SHOW_ALL} from '../constants'

const todos = (state = [], action) => {
  switch (action.type) {
      case INITIALIZE:
          return action.data
      case ADD_TODO:
          return [
            ...state,
            {
              id: action.id,
              text: action.text,
              completed: action.completed
            }
          ]
      case TOGGLE_TODO:
          return state.map(t => {
            if (t.id !== action.id)
              return t
            return Object.assign({}, t, {completed: !t.completed})
          })
      case REMOVE_TODO:
          return state.filter(t => t.id !== action.id)
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

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers
