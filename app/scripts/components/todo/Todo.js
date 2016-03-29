//@flow
import request from 'superagent'
import React, {PropTypes, Component} from 'react'
import {fetchTodos} from '../../actions'
import store from '../../store'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_API} from '../../constants'
import $ from 'jquery'
import {toggleTodo} from '../../actions'
import {connect} from 'react-redux'


class FabButton extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--1-col">
        <button className="mdl-button mdl-js-button mdl-button--fab
          mdl-js-ripple-effect mdl-button--colored mdl-button--mini-fab"
          id={this.props.id} onClick={this.props.onClick}>
          <i className="material-icons">{this.props.icon}</i>
        </button>
        <div className="mdl-tooltip" htmlFor={this.props.id}>
          {this.props.tooltip}
        </div>
      </div>
    )
  }
}


const Todo = ({onClick, id, completed, text}) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--3-offset mdl-cell--4-col">
      <span style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </span>
    </div>
    <FabButton onClick={onClick} id={`check-${id}`} icon="check_circle"
      tooltip="Toggle Complete Status" />
    <FabButton id={`edit-${id}`} icon="mode_edit"
      tooltip="Edit Todo" />
    <FabButton id={`delete-${id}`} icon="delete_forever"
      tooltip="Delete Todo" />
  </div>
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
      <div>
        {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this._handleClick(todo.id)} />)}
      </div>
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
