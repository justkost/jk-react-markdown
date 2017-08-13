import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  panel: {
    display: 'table',
    borderCollapse: 'collapse'
  },
  btn: {
    display: 'table-cell',
    padding: '5px 10px',
    textDecoration: 'none',
    color: '#000',
    border: '1px solid #000',
    fontSize: '14px'
  }
}

class Panel extends Component {
  onClick = (type) => (e) => {
    e.preventDefault()
    console.log(type)
  }

  render () {
    return (
      <div style={ styles.panel }>
        <a href="#" onClick={ this.onClick('bold') } style={ styles.btn }>
          Bold
        </a>
        <a href="#" onClick={ this.onClick('list') } style={ styles.btn }>
          List
        </a>
      </div>
    )
  }
}

export default Panel
