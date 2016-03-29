//@flow
import request from 'superagent'
import {TODO_API} from '../constants'

export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const INITIALIZE = 'INITIALIZE'
export const EDIT_TODO = 'EDIT_TODO'
export const CANCEL_TODO = 'CANCEL_TODO'


export const fetchTodos = (dispatch) => {
  request.get(TODO_API)
  .end((err, res) => dispatch(initialize(res.body)))
}


export const initialize = (data) => {
  return {
    type: INITIALIZE,
    data: data
  }
}


export const addTodo = (id, text, completed) => {
  return {
    type: ADD_TODO,
    id,
    text,
    completed
  }
}


export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}


export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}


export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}


export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    id
  }
}


export const cancelEdit = (id) => {
  return {
    type: CANCEL_TODO,
    id
  }
}
