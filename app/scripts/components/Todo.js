//@flow
import React, {PropTypes, Component} from 'react'
import {fetchTodos} from '../actions'
import store from '../store'

const Todo = ({onClick, completed, text}) => (
  <li className="mdl-list__item" onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
    <span className="mdl-list__item_primary_content">
      {text}
    </span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


class TodoList extends Component {
  constructor({todos, onTodoClick}) {
    super({todos, onTodoClick})
    store.dispatch(fetchTodos())
  }

  render() {
    return (
      <ul className="mdl-list">
        {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this.props.onTodoClick(todo.id)}
        />)}
        </ul>
    )
  }
}

export default TodoList
