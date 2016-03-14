//@flow
import React, { Component } from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

class TodoApp extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    )
  }
}

export default TodoApp
