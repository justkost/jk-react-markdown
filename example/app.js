import React, { Component } from 'react'
import { render } from 'react-dom'
import JkReactMarkdown from '../src/JkReactMarkdown'

class App extends Component {
  state = {
    valueMin: 'Hello **world**!!!',
    valueMax: `### JavaScript
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
    `
  }

  onChangeMin = (text) => {
    this.setState({valueMin: text})
  }

  onChangeMax = (text) => {
    this.setState({valueMax: text})
  }

  render () {
    const buttonsList = [
      'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'a', 'img',
      'codeDefault', 'codeBlock', 'codeHTML', 'codeCSS', 'codeJavaScript',
      'codePHP', 'codePython', 'codeRuby', 'codeJSON', 'codeSQL'
    ]
    return (
      <div>
        <h2>Example (minimal)</h2>
        <JkReactMarkdown
          onChange={ this.onChangeMin }
          value={ this.state.valueMin }
        />
        <br/>
        <h2>Example (maximal)</h2>
        <JkReactMarkdown
          onChange={ this.onChangeMax }
          value={ this.state.valueMax }
          buttons={ buttonsList }
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
