//@flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import TodoApp from './components/todo'
import AboutApp from './components/AboutApp'
import store from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TodoApp} />
        <Route path="about" component={AboutApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
