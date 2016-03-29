import React from 'react'
import FilterLink from './FilterLink'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../../constants'

const Footer = () => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--1-col mdl-cell--4-offset">
      <strong>Show</strong>
    </div>
    <div className="mdl-cell mdl-cell--1-col">
      <FilterLink filter={SHOW_ALL}>
        All
      </FilterLink>
    </div>
    <div className="mdl-cell mdl-cell--1-col">
      <FilterLink filter={SHOW_ACTIVE}>
        Active
      </FilterLink>
    </div>
    <div className="mdl-cell mdl-cell--1-col">
      <FilterLink filter={SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  </div>
)

export default Footer
