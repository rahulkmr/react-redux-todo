//@flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <nav className={this.props.classes}>
        <Link className="mdl-navigation__link" to="/" onlyActiveOnIndex={true} activeClassName="current-link">
          Home
        </Link>
        <Link className="mdl-navigation__link" to="/about" activeClassName="current-link">
          About
        </Link>
        <a className="mdl-navigation__link" href="https://github.com/rahulkmr/react-redux-todo">
          GitHub
        </a>
      </nav>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <Link id="title" to="/"><span className="mdl-layout-title">TODO</span></Link>
                <div className="mdl-layout-spacer"></div>
                <Nav classes="mdl-navigation mdl-layout--large-screen-only" />
            </div>
            </header>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">TODO</span>
                <Nav classes="mdl-navigation" />
            </div>
            <main className="mdl-layout__content">
            <div className="page-content">
              {this.props.children}
            </div>
            </main>
        </div>
      </div>
    )
  }
}

export default App
