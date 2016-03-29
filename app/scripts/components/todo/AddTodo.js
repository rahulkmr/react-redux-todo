import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import { TODO_API } from '../../constants'
import $ from 'jquery'

const postTodo = (dispatch, text) => {
  let data = {text: text}
  request.post(TODO_API)
  .send(data)
  .end((err, res) => {
    let data = res.body
    dispatch(addTodo(data.id, data.text, data.completed))
  })
}


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      postTodo(dispatch, input.value)
      input.value = ''
    }}>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--2-col mdl-cell--4-offset">
          <input ref={node => { input = node }} />
        </div>
        <div className="mdl-cell mdl-cell--2-col">
          <button
            className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--colored"
            type="submit">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
