import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from './components/Panel'
import Buttons from './libs/Buttons'
import getLines from './libs/getLines'
import getNewText from './libs/getNewText'

const { getButtonByName } = new Buttons()

class JkReactMarkdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    cols: PropTypes.string,
    rows: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  state = {
    selectionStr: '',
    selectionStart: 0,
    selectionEnd: 0,
    selectionlines: []
  }

  onClickButton = (name) => {
    let newText = getNewText({
      button: getButtonByName(name),
      text: this.props.value,
      selectionStr: this.state.selectionStr,
      selectionStart: this.state.selectionStart,
      selectionEnd: this.state.selectionEnd,
      selectionlines: this.state.selectionlines
    })
    this.props.onChange(newText)
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  onSelect = (e) => {
    let {
      selectionStart,
      selectionEnd
    } = e.target
    let selectionStr = this.props.value.substring(
      selectionStart, selectionEnd
    )
    let selectionlines = getLines(
      selectionStart,
      selectionEnd,
      this.props.value
    )
    this.setState({
      selectionStr,
      selectionStart,
      selectionEnd,
      selectionlines
    })
  }

  render () {
    let cols = this.props.cols ? this.props.cols : '30'
    let rows = this.props.rows ? this.props.rows : '5'

    return (
      <div>
        <Panel onClick={ this.onClickButton } />
        <textarea
          cols={ cols }
          rows={ rows }
          className={ this.props.className }
          value={ this.props.value }
          onChange={ this.onChange }
          onSelect={ this.onSelect }></textarea>
      </div>
    )
  }
}

module.exports = JkReactMarkdown
