/* global prompt */

import React, { Component } from 'react'
import { render } from 'react-dom'
import JkReactMarkdown from '../src/JkReactMarkdown'
import insertTag from '../src/libs/insertTag'

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
\`\`\``,
    valueWithImg: '![alt text](../screenshot.png)'
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

  onChangeWithImg = (text) => {
    this.setState({valueWithImg: text})
  }

  onClickImg = (ctx) => {
    const userPath = prompt('Image path', 'https://')
    const imgPath = `![](${userPath})`
    if (!userPath) return
    const newText = insertTag({
      text: ctx.text,
      position: ctx.position,
      inserted: imgPath
    })
    this.onChangeWithImg(newText)
  }

  render () {
    const buttons = ['b', 'i', 'h1', 'ul', 'code']
    const buttonsWithImg = ['b', 'i', 'h1', 'h2', 'img', 'ul', 'ol', 'code']

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
        <br/>

        <h2>Cutom img handler</h2>
        <JkReactMarkdown
          onChange={ this.onChangeWithImg }
          value={ this.state.valueWithImg }
          buttons={ buttonsWithImg }
          onClickImg={ this.onClickImg }
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
