import './jkReactMarkdown.css'
import 'highlight.js/styles/github.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Panel from './components/Panel'
import Buttons from './libs/Buttons'
import getNewText from './libs/getNewText'
import buttonsDetector from './libs/buttonsDetector'
import ReactMarkdown from 'react-markdown'

import hljs from 'highlight.js/lib/highlight'
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.configure({
  languages: [
    'xml',
    'css',
    'javascript',
    'php',
    'python',
    'ruby',
    'json',
    'sql'
  ]
})

const {
  getButtonByName,
  getList,
  getTypes
} = new Buttons()

class JkReactMarkdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    cols: PropTypes.string,
    rows: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClickImg: PropTypes.func,
    styles: PropTypes.object,
    buttons: PropTypes.array,
    showPreview: PropTypes.bool
  }

  state = {
    selectionStart: 0,
    selectionEnd: 0,
    showResult: false,
    textArr: this.props.value ? this.props.value.split(/[\r\n]/) : [],
    selectionButtons: []
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.showResult && !prevState.showResult) {
      this.highlightCode()
    }
  }

  componentWillReceiveProps (newProps) {
    if (this.props.value !== newProps.value) {
      this.setState({
        textArr: newProps.value.split(/[\r\n]/)
      })
      if (this.props.showPreview) {
        this.highlightCode()
      }
    }
  }

  highlightCode () {
    const domNode = ReactDOM.findDOMNode(this)
    const nodes = domNode.querySelectorAll('pre code')
    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i])
    }
  }

  onClickButton = (name) => {
    if (name === 'showResult') {
      this.setState({showResult: !this.state.showResult})
      return
    }

    // disable buttons if preview on
    if (this.state.showResult) return

    if (name === 'img' && this.props.onClickImg) {
      this.props.onClickImg({
        text: this.props.value,
        position: this.state.selectionEnd || this.state.selectionStart
      })
      return
    }

    let newText = getNewText({
      button: getButtonByName(name),
      text: this.props.value,
      textArr: this.state.textArr,
      selectionStart: this.state.selectionStart,
      selectionEnd: this.state.selectionEnd,
      selectionButtons: this.state.selectionButtons,
      getButtonByName: getButtonByName,
      types: getTypes()
    })

    this.props.onChange(newText)
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  onSelect = (e) => {
    let selectionButtons = buttonsDetector({
      text: this.props.value,
      textArr: this.state.textArr,
      selectionStart: e.target.selectionStart,
      selectionEnd: e.target.selectionEnd,
      list: getList(this.props.buttons),
      types: getTypes()
    })
    this.setState({
      selectionStart: e.target.selectionStart,
      selectionEnd: e.target.selectionEnd,
      selectionButtons: selectionButtons
    })
  }

  render () {
    let { styles, showPreview } = this.props
    styles = styles || {}
    let cols = this.props.cols ? this.props.cols : '30'
    let rows = this.props.rows ? this.props.rows : '5'
    let styleEditor = styles.editor || {}
    let styleResult = styles.result || {}
    let editor = (
      <textarea
        cols={ cols }
        rows={ rows }
        style={ styleEditor }
        className={ this.props.className || 'JkReactMarkdown__textarea' }
        value={ this.props.value }
        onChange={ this.onChange }
        onSelect={ this.onSelect }></textarea>
    )
    let result = (
      <div className="JkReactMarkdown__result" style={ styleResult }>
        <ReactMarkdown source={ this.props.value } />
      </div>
    )

    if (showPreview) {
      return (
        <div>
          <div className="JkReactMarkdown__row">
            <div className="JkReactMarkdown__col JkReactMarkdown__col-editor">
              <Panel
                onClick={ this.onClickButton }
                style={ this.props.styles }
                showResult={ this.state.showResult }
                selectionButtons={ this.state.selectionButtons }
                list={ getList(this.props.buttons) }
                showPreview={ showPreview }
              />
              { editor }
            </div>
            <div className="JkReactMarkdown__col JkReactMarkdown__col-result">
              { result }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Panel
            onClick={ this.onClickButton }
            style={ this.props.styles }
            showResult={ this.state.showResult }
            selectionButtons={ this.state.selectionButtons }
            list={ getList(this.props.buttons) }
            showPreview={ showPreview }
          />
          { this.state.showResult ? result : editor }
        </div>
      )
    }
  }
}

export default JkReactMarkdown
