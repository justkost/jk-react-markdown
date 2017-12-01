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
      if (this.props.showResult) {
        className += ' JkReactMarkdown__panel-btn--disabled'
      }
      return (
        <a href="#"
          key={ button.name }
          onClick={ this.onClick(button.name) }
          title={ button.title }
          className={ className }>
          <i className={ button.symbol }></i>
        </a>
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
          <a href="#"
            onClick={ this.onClick('showResult') }
            title="Result"
            className="JkReactMarkdown__panel-btn JkReactMarkdown__panel-btn-result">
            { iconResult }
          </a>
        </div>
      </div>
    )
  }
}

export default Panel
