import React, { Component } from 'react'
import { render } from 'react-dom'
import JkReactMarkdown from '../src/JkReactMarkdown'

class App extends Component {
  state = {
    value: 'Hello world!!!'
  }

  onChange = (text) => {
    this.setState({value: text})
  }

  render () {
    return (
      <div>
        <h1>Example</h1>
        <JkReactMarkdown
          className="form-control"
          onChange={ this.onChange }
          value={ this.state.value }
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
