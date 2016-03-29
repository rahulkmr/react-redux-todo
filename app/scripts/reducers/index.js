//@flow
import {combineReducers} from 'redux'
import {INITIALIZE, ADD_TODO, UPDATE_TODO, SET_VISIBILITY_FILTER,
  REMOVE_TODO, EDIT_TODO, CANCEL_EDIT} from '../actions'
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
      case UPDATE_TODO:
          return state.map(t => {
            if (t.id !== action.id)
              return t
            return {...t, edit: false, completed: action.completed, text: action.text}
          })
      case REMOVE_TODO:
          return state.filter(t => t.id !== action.id)
      case EDIT_TODO:
          return state.map(t => {
            if (t.id !== action.id)
              return t
            return {...t, edit: true}
          })
      case CANCEL_EDIT:
          return state.map(t => {
            if (t.id !== action.id)
              return t
            return {...t, edit: false}
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

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers
