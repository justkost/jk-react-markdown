# jk-react-markdown
Simple markdown editor for react with preview

![jk-react-markdown screenshot](https://raw.githubusercontent.com/justkost/jk-react-markdown/master/screenshot.png)

## Install

npm install --save jk-react-markdown

## Usage

```js
import 'jk-react-markdown/dist/jk-react-markdown.css'
import Editor from 'jk-react-markdown'

const buttons = [
  'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol',
  'a', 'img', 'code'
]

<Editor
  value={ this.state.value }
  onChange={ this.onChange }
  buttons={ buttons }
/>
```

## Props

* value: PropTypes.string
* onChange: PropTypes.func
* className: PropTypes.string
* styles: PropTypes.object
* cols: PropTypes.string
* rows: PropTypes.string
* onClickImg: PropTypes.func
* buttons: PropTypes.array
* showPreview: PropTypes.bool

## Styles

```js
let styles = {
  editor: {borderColor: '#2c3e50'},
  result: {borderColor: '#2c3e50'},
  panel: {backgroundColor: '#2c3e50'}
}
```

## Syntax highlighting (highlight.js)

* html
* xml
* css
* javascript
* php
* python
* ruby
* json
* sql
