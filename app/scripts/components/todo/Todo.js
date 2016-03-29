//@flow
import request from 'superagent'
import React, {PropTypes, Component} from 'react'
import {fetchTodos} from '../../actions'
import store from '../../store'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_API} from '../../constants'
import $ from 'jquery'
import {updateTodo, removeTodo, editTodo, cancelEdit} from '../../actions'
import {connect} from 'react-redux'
import { FloatingLabelTextBox } from '../Common'


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


let EditTodo = ({ id, text, completed, dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      request.put(`${TODO_API}/${id}`)
      .send({text: input.value.trim()})
      .end((err, res) => {
        dispatch(updateTodo(res.body.id, res.body.text, res.body.completed))
      })
    }}>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-offset">
          <input className="input" ref={node => { input = node }} defaultValue={text} />
        </div>
        <div className="mdl-cell mdl-cell--1-col">
          <button
            className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--colored"
            type="submit">
            Add
          </button>
        </div>
        <div className="mdl-cell mdl-cell--1-col">
          <button
            className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            onClick={(evt) => dispatch(cancelEdit(id))}
            type="reset">
            Reset
          </button>
        </div>
      </div>
    </form>
  )
}


const Todo = ({id, completed, text, edit, dispatch, onCheckClick, onEditClick, onDeleteClick}) => {
  if (edit) {
    return <EditTodo id={id} completed={completed} text={text} dispatch={dispatch} />
  } else {
    const editComponent = completed && <span></span> ||
      <FabButton onClick={onEditClick} id={`edit-${id}`} icon="mode_edit"
      tooltip="Edit Todo" />

    return (
      <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--3-offset mdl-cell--4-col">
        <span style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {text}
        </span>
      </div>
      <FabButton onClick={onCheckClick} id={`check-${id}`} icon="check_circle"
      tooltip="Toggle Complete Status" />
      {editComponent}
      <FabButton onClick={onDeleteClick} id={`delete-${id}`} icon="delete_forever"
      tooltip="Delete Todo" />
      </div>
    )
  }
}


Todo.propTypes = {
  onCheckClick: PropTypes.func.isRequired,
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
          dispatch={this.props.dispatch}
          onCheckClick={() => this._handleCheckClick(todo.id, !todo.completed)}
          onDeleteClick={() => this._handleDeleteClick(todo.id)} 
          onEditClick={() => this._handleEditClick(todo.id)}
          />)}
      </div>
    )
  }

  _handleCheckClick(id, completed) {
    const data = {completed: completed}
    request.put(`${TODO_API}/${id}`)
    .send(data)
    .end((err, res) => {
      this.dispatch(updateTodo(res.body.id, res.body.text, res.body.completed))
    })
  }

  _handleDeleteClick(id) {
    request.delete(`${TODO_API}/${id}`)
    .end((err, res) => this.dispatch(removeTodo(id)))
  }

  _handleEditClick(id) {
    this.dispatch(editTodo(id))
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
