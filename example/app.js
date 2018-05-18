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
    valueWithPreview: `* list item 1
* list item 2
* list item 3
`
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
    const buttonsMaxList = [
      'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'a', 'img',
      'codeDefault', 'codeHTML', 'codeCSS', 'codeJavaScript',
      'codePHP', 'codePython', 'codeRuby', 'codeJSON', 'codeSQL'
    ]
    const buttonsSmallList = ['b', 'i', 'h1', 'h3', 'ul', 'a']

    return (
      <div>
        <h2>Default</h2>
        <JkReactMarkdown
          onChange={ this.onChangeMin }
          value={ this.state.valueMin }
        />
        <br/>

        <h2>All buttons</h2>
        <JkReactMarkdown
          onChange={ this.onChangeMax }
          value={ this.state.valueMax }
          buttons={ buttonsMaxList }
        />
        <br/>

        <h2>Show previews always</h2>
        <JkReactMarkdown
          onChange={ this.onChangeWithPreview }
          value={ this.state.valueWithPreview }
          buttons={ buttonsSmallList }
          showPreview
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
