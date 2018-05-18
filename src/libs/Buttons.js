class Buttons {
  getButtonByName = (name) => {
    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i].name === name) {
        return this._list[i]
      }
    }
  }

  getList = (buttons) => {
    let listNames = this._defaultButtons
    if (buttons && buttons.length) {
      listNames = buttons
    }
    let result = []
    listNames.forEach(buttonName => {
      this._list.forEach(button => {
        if (button.name === buttonName) result.push(button)
      })
    })
    return result
  }

  getTypes = () => {
    return this._types
  }

  _defaultButtons = ['b', 'i', 'h1', 'h2', 'h3', 'ul', 'ol', 'a', 'codeDefault']

  _types = {
    block: 'block',
    inline: 'inline',
    code: 'code'
  }

  _list = [
    {
      name: 'b',
      title: 'Bold',
      symbol: 'icon-jk-bold',
      type: this._types.inline,
      before: '**',
      after: '**',
      re: /^\*\*.+\*\*$/
    },
    {
      name: 'i',
      title: 'Italic',
      symbol: 'icon-jk-italic',
      type: this._types.inline,
      before: '_',
      after: '_',
      re: /^_.+_$/
    },
    {
      name: 'h1',
      title: 'Header 1',
      symbol: 'icon-jk-header',
      text: '1',
      type: this._types.block,
      before: '# ',
      re: /^#\s+/,
      group: 'header'
    },
    {
      name: 'h2',
      title: 'Header 2',
      symbol: 'icon-jk-header',
      text: '2',
      type: this._types.block,
      before: '## ',
      re: /^##\s+/,
      group: 'header'
    },
    {
      name: 'h3',
      title: 'Header 3',
      symbol: 'icon-jk-header',
      text: '3',
      type: this._types.block,
      before: '### ',
      re: /^###\s+/,
      group: 'header'
    },
    {
      name: 'h4',
      title: 'Header 4',
      symbol: 'icon-jk-header',
      text: '4',
      type: this._types.block,
      before: '#### ',
      re: /^####\s+/,
      group: 'header'
    },
    {
      name: 'h5',
      title: 'Header 5',
      symbol: 'icon-jk-header',
      text: '5',
      type: this._types.block,
      before: '##### ',
      re: /^#####\s+/,
      group: 'header'
    },
    {
      name: 'h6',
      title: 'Header 6',
      symbol: 'icon-jk-header',
      text: '6',
      type: this._types.block,
      before: '###### ',
      re: /^######\s+/,
      group: 'header'
    },
    {
      name: 'ul',
      title: 'List',
      symbol: 'icon-jk-list-bullet',
      type: this._types.block,
      before: '* ',
      re: /^[\*\-]\s+/, // eslint-disable-line
      group: 'list'
    },
    {
      name: 'ol',
      title: 'List',
      symbol: 'icon-jk-list-numbered',
      type: this._types.block,
      before: '1. ',
      re: /^\d\.\s+/, // eslint-disable-line
      group: 'list'
    },
    {
      name: 'a',
      title: 'Link',
      symbol: 'icon-jk-link',
      type: this._types.inline,
      before: '[',
      after: '](https://)'
    },
    {
      name: 'img',
      title: 'Image',
      symbol: 'icon-jk-picture',
      type: this._types.inline,
      before: '![alt text](',
      after: ')'
    },
    {
      name: 'code',
      title: 'Code',
      symbol: '',
      text: 'Code',
      type: this._types.code,
      before: '```',
      after: '```'
    },
    {
      name: 'codeDefault',
      title: 'Code',
      symbol: '',
      text: 'Code',
      type: this._types.code,
      before: '```',
      after: '```'
    },
    {
      name: 'codeHTML',
      title: 'Code HTML, XML',
      symbol: '',
      text: 'HTML, XML',
      type: this._types.code,
      before: '```xml',
      after: '```'
    },
    {
      name: 'codeCSS',
      title: 'Code CSS',
      symbol: '',
      text: 'CSS',
      type: this._types.code,
      before: '```css',
      after: '```'
    },
    {
      name: 'codeJavaScript',
      title: 'Code JavaScript',
      symbol: '',
      text: 'JavaScript',
      type: this._types.code,
      before: '```javascript',
      after: '```'
    },
    {
      name: 'codePHP',
      title: 'Code PHP',
      symbol: '',
      text: 'PHP',
      type: this._types.code,
      before: '```php',
      after: '```'
    },
    {
      name: 'codePython',
      title: 'Code Python',
      symbol: '',
      text: 'Python',
      type: this._types.code,
      before: '```python',
      after: '```'
    },
    {
      name: 'codeRuby',
      title: 'Code Ruby',
      symbol: '',
      text: 'Ruby',
      type: this._types.code,
      before: '```ruby',
      after: '```'
    },
    {
      name: 'codeJSON',
      title: 'Code JSON',
      symbol: '',
      text: 'JSON',
      type: this._types.code,
      before: '```json',
      after: '```'
    },
    {
      name: 'codeSQL',
      title: 'Code SQL',
      symbol: '',
      text: 'SQL',
      type: this._types.code,
      before: '```sql',
      after: '```'
    }
  ]
}

export default Buttons
