# jk-react-markdown
A simple markdown editor for react

## Install

npm install --save jk-react-markdown

## Usage

```js
import 'jk-react-markdown/dist/jk-react-markdown.css'
import Editor from 'jk-react-markdown'

<Editor
  cols="30"
  rows="10"
  value={ this.state.value }
  onChange={ this.onChange }
/>
```

## Props

* className: PropTypes.string
* headerLevel: PropTypes.number
* cols: PropTypes.string
* rows: PropTypes.string
* value: PropTypes.string
* onChange: PropTypes.func
