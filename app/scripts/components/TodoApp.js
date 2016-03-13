//@flow

import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
  <div>
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
