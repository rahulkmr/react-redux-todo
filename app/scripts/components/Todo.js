//@flow
import React, {PropTypes} from 'react'
import {fetchTodos} from '../actions'

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
  constructor({todos, onTodoCick, dispatch}) {
    super(todos, onTodoClick, dispatch)
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

  componentWillMount() {
    fetchTodos(this.props.dispatch)
  }
}

export default TodoList
