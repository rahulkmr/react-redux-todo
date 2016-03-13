//@flow
import $ from 'jquery'
import {todoApi} from '../constants'

let nextTodoId = 0
export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const INITIALIZE = 'INITIALIZE'


export const startFetch = (store) => {
  $.ajax({
    url: todoApi,
    dataType: 'json',
    cache: false})
    .then((data) => store.dispatch(initialize(data)))
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
