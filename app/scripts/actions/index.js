//@flow
import $ from 'jquery'

let nextTodoId = 0
export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const INITIALIZE = 'INITIALIZE'

let todoApi = `http://localhost:9000/api/todos`

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


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
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
