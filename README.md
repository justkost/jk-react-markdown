# jk-react-markdown
Simple markdown editor for react with preview

![jk-react-markdown screenshot](https://raw.githubusercontent.com/justkost/jk-react-markdown/master/screenshot.png)

## Install

npm install --save jk-react-markdown

## Usage

```js
import 'jk-react-markdown/dist/jk-react-markdown.css'
import Editor from 'jk-react-markdown'

const buttonsList = [
  'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'a', 'img',
  'codeDefault', 'codeBlock', 'codeHTML', 'codeCSS', 'codeJavaScript',
  'codePHP', 'codePython', 'codeRuby', 'codeJSON', 'codeSQL'
]

<Editor
  cols="30"
  rows="10"
  value={ this.state.value }
  onChange={ this.onChange }
  buttons={ buttonsList }
/>
```

## Props

* className: PropTypes.string
* styles: PropTypes.object
* cols: PropTypes.string
* rows: PropTypes.string
* value: PropTypes.string
* onChange: PropTypes.func
* buttons: PropTypes.array

## Styles

```js
let styles = {
  editor: {borderColor: '#2c3e50'},
  result: {borderColor: '#2c3e50'},
  panel: {backgroundColor: '#2c3e50'}
}
```
