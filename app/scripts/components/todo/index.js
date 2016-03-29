//@flow
import React, { Component } from 'react'
import Footer from './Footer'
import TodoList from './Todo'
import AddTodo from './AddTodo'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default TodoApp
