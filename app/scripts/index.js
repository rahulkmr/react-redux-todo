//@flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import TodoApp from './components/TodoApp'
import store from './store'
import {fetchTodos} from './actions'

store.dispatch(fetchTodos())
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
