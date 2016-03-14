//@flow
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/Todo'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_API} from '../constants'
import $ from 'jquery'

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
      case SHOW_ALL:
          return todos
      case SHOW_COMPLETED:
          return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
          return todos.filter(t => !t.completed)
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibileTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      $.ajax({
        url: `${TODO_API}/${id}`,
        type: 'PUT',
        dataType: 'json'
      })
      .then((data) => dispatch(toggleTodo(id)))
    }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
