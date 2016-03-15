//@flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">TODO</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to="/about">About</Link>
                </nav>
            </div>
            </header>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">TODO</span>
                <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">About</a>
                <a className="mdl-navigation__link" href="">Github</a>
                </nav>
            </div>
            <main className="mdl-layout__content">
            <div className="page-content">
              {this.props.children}
            </div>
            </main>
        </div>
    )
  }
}

export default App
