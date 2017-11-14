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
* styles: PropTypes.object
* cols: PropTypes.string
* rows: PropTypes.string
* value: PropTypes.string
* onChange: PropTypes.func

## Styles

```js
let styles = {
  editor: {borderColor: '#2c3e50'},
  result: {borderColor: '#2c3e50'},
  panel: {backgroundColor: '#2c3e50'}
}
```
