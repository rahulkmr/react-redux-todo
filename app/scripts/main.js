//@flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoReducers from './reducers'
import TodoApp from './components/TodoApp'

let store = createStore(todoReducers)

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
