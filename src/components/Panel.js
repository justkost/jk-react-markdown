import './panel.css'
import '../fontello/css/fontello.css'

import React, { Component } from 'react'
import Buttons from '../libs/Buttons'
import PropTypes from 'prop-types'
const { list } = new Buttons()

class Panel extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  onClick = (name) => (e) => {
    e.preventDefault()
    this.props.onClick(name)
  }

  render () {
    let buttonsList = list.map((button, index) => {
      return (
        <a href="#"
          key={ button.name }
          onClick={ this.onClick(button.name) }
          title={ button.title }
          className="JkReactMarkdown__panel__btn">
          <i className={ button.symbol }></i>
        </a>
      )
    })

    return (
      <div className="JkReactMarkdown__panel">
        <div className="JkReactMarkdown__panel-inner">
          { buttonsList }
          <a href="#"
            onClick={ this.onClick('showResult') }
            title="Result"
            className="JkReactMarkdown__panel__btn">
            <i className="icon-eye"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Panel
