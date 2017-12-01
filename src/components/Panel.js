import './panel.css'
import '../fontello/css/fontello.css'

import React, { Component } from 'react'
import Buttons from '../libs/Buttons'
import PropTypes from 'prop-types'
const { list } = new Buttons()

class Panel extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    showResult: PropTypes.bool,
    style: PropTypes.object
  }

  onClick = (name) => (e) => {
    e.preventDefault()
    this.props.onClick(name)
  }

  render () {
    let { style } = this.props
    style = style || {}
    let stylePanel = style.panel || {}
    let buttonsList = list.map((button, index) => {
      let className = 'JkReactMarkdown__panel-btn'
      let text = ''
      if (this.props.showResult) {
        className += ' JkReactMarkdown__panel-btn--disabled'
      }
      switch (button.name) {
        case 'h1': text = 1
          break
        case 'h2': text = 2
          break
        case 'h3': text = 3
          break
        case 'h4': text = 4
          break
      }
      return (
        <button
          key={ button.name }
          onClick={ this.onClick(button.name) }
          title={ button.title }
          className={ className }>
          <i className={ button.symbol }></i> { text }
        </button>
      )
    })

    let iconResult = this.props.showResult ? (
      <i className="icon-eye-off"></i>
    ) : (
      <i className="icon-eye"></i>
    )

    return (
      <div className="JkReactMarkdown__panel" style={ stylePanel }>
        <div className="JkReactMarkdown__panel-left">
          { buttonsList }
        </div>
        <div className="JkReactMarkdown__panel-right">
          <button
            onClick={ this.onClick('showResult') }
            title="Result"
            className="JkReactMarkdown__panel-btn JkReactMarkdown__panel-btn-result">
            { iconResult }
          </button>
        </div>
      </div>
    )
  }
}

export default Panel
