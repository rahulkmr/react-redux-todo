//@flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import TodoApp from './components/TodoApp'
import AboutApp from './components/AboutApp'
//import store, {history} from './store'
import store from './store'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

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
