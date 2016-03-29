//@flow
import React, { Component } from 'react'


export class FloatingLabelTextBox extends Component {
  render() {
    return (
      <div className={this.props.containerClass} id={this.props.containerId}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" pattern={this.props.pattern}
            disabled={this.props.disabled}
            onChange={this.props.onChange}
            ref={this.props.textRef}
            id={this.props.id} value={this.props.value} />
          <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.label}</label>
          <span className="mdl-textfield__error">{this.props.errorMessage}</span>
        </div>
      </div>
    )
  }
}
