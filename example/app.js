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
\`\`\``,
    valueWithPreview: `### JavaScript
\`\`\`
let str = "hello world";
alert(str);
\`\`\``
  }

  onChangeMin = (text) => {
    this.setState({valueMin: text})
  }

  onChangeMax = (text) => {
    this.setState({valueMax: text})
  }

  onChangeWithPreview = (text) => {
    this.setState({valueWithPreview: text})
  }

  render () {
    const buttons = ['b', 'i', 'h1', 'ul', 'code']

    return (
      <div>
        <h2>Default</h2>
        <JkReactMarkdown
          onChange={ this.onChangeMin }
          value={ this.state.valueMin }
        />
        <br/>

        <h2>Show previews always</h2>
        <JkReactMarkdown
          onChange={ this.onChangeWithPreview }
          value={ this.state.valueWithPreview }
          buttons={ buttons }
          showPreview
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
