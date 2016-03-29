//@flow
import request from 'superagent'
import React, {PropTypes, Component} from 'react'
import {fetchTodos} from '../../actions'
import store from '../../store'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_API} from '../../constants'
import $ from 'jquery'
import {toggleTodo} from '../../actions'
import {connect} from 'react-redux'


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
  constructor({todos, dispatch}) {
    super({todos})
    fetchTodos(dispatch)
    this.dispatch = dispatch
  }

  render() {
    return (
      <ul className="mdl-list">
        {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this._handleClick(todo.id)}
        />)}
        </ul>
    )
  }

  _handleClick(id) {
    request.put(`${TODO_API}/${id}`)
    .end((err, res) => this.dispatch(toggleTodo(id)))
  }

  static getVisibileTodos(todos, filter) {
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
  }

}


const mapStateToProps = (state) => {
  return {
    todos: TodoList.getVisibileTodos(state.todos, state.visibilityFilter)
  }
}

TodoList = connect(mapStateToProps)(TodoList)

export default TodoList
