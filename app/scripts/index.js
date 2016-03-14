//@flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import TodoApp from './components/TodoApp'
import store, {history} from './store'
import { Router, Route, Link } from 'react-router'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
