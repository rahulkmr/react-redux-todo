import expect from 'expect'
import * as actions from '../app/scripts/actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Learn React',
      id = 1,
      completed = false

    const expectedAction = {
      type: actions.ADD_TODO,
      id,
      text,
      completed
    }
    expect(actions.addTodo(id, text, completed)).toEqual(expectedAction)
  })
})
