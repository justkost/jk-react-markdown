/* global prompt */

import React, { Component } from 'react'
import { render } from 'react-dom'
import Editor from '../src/JkReactMarkdown'
import insertStr from '../src/libs/insertStr'

class App extends Component {
  state = {
    valueDefault: 'Hello **world**!!!',
    valueWithPreview: `### JavaScript
\`\`\`
let str = "hello world";
alert(str);
\`\`\``,
    valueWithImg: ''
  }

  onChangeDefault = (text) => {
    this.setState({valueDefault: text})
  }

  onChangeWithPreview = (text) => {
    this.setState({valueWithPreview: text})
  }

  onChangeWithImg = (text) => {
    this.setState({valueWithImg: text})
  }

  onClickImg = (ctx) => {
    const customPath = prompt('URL', 'https://')
    if (!customPath) return
    const newText = insertStr({
      text: ctx.text,
      position: ctx.position,
      str: `![](${customPath})`
    })
    this.onChangeWithImg(newText)
  }

  render () {
    const buttonsPreview = ['b', 'i', 'h1', 'ul', 'code']
    const buttonsDefault = [
      'b', 'i', 'h1', 'h2', 'h3', 'ul', 'ol',
      'a', 'img', 'code'
    ]
    return (
      <div>
        <h3>Default</h3>
        <Editor
          onChange={ this.onChangeDefault }
          value={ this.state.valueDefault }
          buttons={ buttonsDefault }
        />

        <h3>Show previews always</h3>
        <Editor
          onChange={ this.onChangeWithPreview }
          value={ this.state.valueWithPreview }
          buttons={ buttonsPreview }
          showPreview
        />

        <h3>Cutom img handler</h3>
        <Editor
          onChange={ this.onChangeWithImg }
          value={ this.state.valueWithImg }
          buttons={ buttonsDefault }
          onClickImg={ this.onClickImg }
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
