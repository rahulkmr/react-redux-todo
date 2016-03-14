//@flow
import React, {PropTypes} from 'react'

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

const TodoList = ({todos, onTodoClick}) => (
  <ul className="mdl-list">
    {todos.map(todo => 
    <Todo 
      key={todo.id} 
      {...todo} 
      onClick={() => onTodoClick(todo.id)} 
      />)}
  </ul>
)


export default TodoList
