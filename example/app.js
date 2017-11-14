import React, { Component } from 'react'
import { render } from 'react-dom'
import JkReactMarkdown from '../src/JkReactMarkdown'

class App extends Component {
  state = {
    value: 'Hello **world**!!!'
  }

  styles = {
    editor: {borderColor: '#2c3e50'},
    result: {borderColor: '#2c3e50'},
    panel: {backgroundColor: '#2c3e50'}
  }

  onChange = (text) => {
    this.setState({value: text})
  }

  render () {
    return (
      <div>
        <h1>Example</h1>
        <JkReactMarkdown
          styles={ this.styles }
          onChange={ this.onChange }
          value={ this.state.value }
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
