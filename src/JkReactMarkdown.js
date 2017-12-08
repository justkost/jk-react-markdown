import './jkReactMarkdown.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from './components/Panel'
import Buttons from './libs/Buttons'
import getNewText from './libs/getNewText'
import buttonsDetector from './libs/buttonsDetector'
import ReactMarkdown from 'react-markdown'

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
    styles: PropTypes.object
  }

  state = {
    selectionStart: 0,
    selectionEnd: 0,
    showResult: false,
    textArr: this.props.value.split(/[\r\n]/),
    selectionButtons: []
  }

  componentWillReceiveProps (newProps) {
    if (this.props.value !== newProps.value) {
      this.setState({
        textArr: newProps.value.split(/[\r\n]/)
      })
    }
  }

  onClickButton = (name) => {
    if (name === 'showResult') {
      this.setState({showResult: !this.state.showResult})
      return
    }

    if (this.state.showResult) return

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
      list: getList(),
      types: getTypes()
    })
    this.setState({
      selectionStart: e.target.selectionStart,
      selectionEnd: e.target.selectionEnd,
      selectionButtons: selectionButtons
    })
  }

  render () {
    let { styles } = this.props
    styles = styles || {}
    let cols = this.props.cols ? this.props.cols : '30'
    let rows = this.props.rows ? this.props.rows : '5'
    let styleEditor = styles.editor || {}
    let styleResult = styles.result || {}
    let list = getList()
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

    return (
      <div>
        <Panel
          onClick={ this.onClickButton }
          style={ this.props.styles }
          showResult={ this.state.showResult }
          selectionButtons={ this.state.selectionButtons }
          list={ list }
        />
        { this.state.showResult ? result : editor }
      </div>
    )
  }
}

export default JkReactMarkdown
