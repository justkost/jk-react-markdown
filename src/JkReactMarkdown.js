import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from './components/Panel'

class JkReactMarkdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    cols: PropTypes.string,
    rows: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  render () {
    let cols = this.props.cols ? this.props.cols : '30'
    let rows = this.props.rows ? this.props.rows : '5'

    return (
      <div>
        <Panel />
        <textarea
          id="JkReactMarkdownTextarea"
          cols={ cols }
          rows={ rows }
          className={ this.props.className }
          value={ this.props.value }
          onChange={ this.props.onChange }></textarea>
      </div>
    )
  }
}

export default JkReactMarkdown
