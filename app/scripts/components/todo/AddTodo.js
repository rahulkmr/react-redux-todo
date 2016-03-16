import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import { TODO_API } from '../../constants'
import $ from 'jquery'

const postTodo = (dispatch, text) => {
  $.ajax({
    url: TODO_API,
    dataType: 'json',
    data: {text: text},
    type: 'POST'})
    .then((data) => dispatch(addTodo(data.id, data.text, data.completed)))
}


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        postTodo(dispatch, input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button
          className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--colored"
          type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo