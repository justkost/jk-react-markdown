import React, { Component } from 'react'
import Buttons from '../libs/Buttons'
import PropTypes from 'prop-types'
const { list } = new Buttons()
const styles = {
  panel: {
    display: 'table',
    borderCollapse: 'collapse'
  },
  btn: {
    display: 'table-cell',
    padding: '5px',
    textDecoration: 'none',
    color: '#000',
    border: '1px solid #000',
    fontSize: '14px',
    width: '50px',
    textAlign: 'center'
  }
}

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
          style={ styles.btn }>
          { button.symbol }
        </a>
      )
    })

    return (
      <div style={ styles.panel }>
        { buttonsList }
      </div>
    )
  }
}

export default Panel
