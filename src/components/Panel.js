import './panel.css'
import '../fontello/css/fontello-jk.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Panel extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    showResult: PropTypes.bool,
    style: PropTypes.object,
    selectionButtons: PropTypes.array,
    list: PropTypes.array
  }

  onClick = (name) => (e) => {
    e.preventDefault()
    this.props.onClick(name)
  }

  render () {
    let { style } = this.props
    style = style || {}
    let stylePanel = style.panel || {}
    let buttonsList = this.props.list.map((button, index) => {
      let className = 'JkReactMarkdown__panel-btn'
      let text = button.text ? button.text : null
      if (this.props.showResult) {
        className += ' JkReactMarkdown__panel-btn--disabled'
      }
      if (this.props.selectionButtons.includes(button.name)) {
        className += ' JkReactMarkdown__panel-btn--active'
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

    let iconPreview = this.props.showResult ? (
      <i className="icon-jk-eye-off"></i>
    ) : (
      <i className="icon-jk-eye"></i>
    )

    return (
      <div className="JkReactMarkdown__panel" style={ stylePanel }>
        <div className="JkReactMarkdown__panel-left">
          { buttonsList }
        </div>
        <div className="JkReactMarkdown__panel-right">
          <button
            onClick={ this.onClick('showResult') }
            title="Preview"
            className="JkReactMarkdown__panel-btn JkReactMarkdown__panel-btn-result">
            { iconPreview }
          </button>
        </div>
      </div>
    )
  }
}

export default Panel
