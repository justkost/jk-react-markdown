import React, { Component } from 'react'
import { render } from 'react-dom'
import JkReactMarkdown from '../src/JkReactMarkdown'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Example</h1>
        <JkReactMarkdown />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
