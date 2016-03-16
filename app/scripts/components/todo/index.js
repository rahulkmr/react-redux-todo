//@flow
import React, { Component } from 'react'
import Footer from './Footer'
import TodoList from './Todo'
import AddTodo from './AddTodo'

class TodoApp extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset">
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </div>
    )
  }
}

export default TodoApp