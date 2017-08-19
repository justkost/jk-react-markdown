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
          className="JkReactMarkdown__panel__btn">
          <i className={ button.symbol }></i>
        </a>
      )
    })

    return (
      <div className="JkReactMarkdown__panel">
        <div className="JkReactMarkdown__panel-inner">
          { buttonsList }
        </div>
      </div>
    )
  }
}

export default Panel
