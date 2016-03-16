//@flow
import React, {PropTypes, Component} from 'react'
import {setVisibilityFilter} from '../../actions'
import {connect} from 'react-redux'

class FilterLink extends Component {
  constructor({active, children, dispatch}) {
    super({active, children, dispatch})
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a href="#"
        onClick={e => {e.preventDefault(); this._handleClick(); }}>
        {this.props.children}
      </a>
    )
  }

  _handleClick() {
    this.props.dispatch(setVisibilityFilter(this.props.filter))
  }

  static stateToProps(state, ownProps) {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  }
}

FilterLink = connect(FilterLink.stateToProps)(FilterLink)

export default FilterLink
