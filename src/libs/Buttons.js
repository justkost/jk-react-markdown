class Buttons {
  getButtonByName = (name) => {
    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i].name === name) {
        return this._list[i]
      }
    }
  }

  getList = () => {
    return this._list
  }

  getTypes = () => {
    return this._types
  }

  _types = {
    block: 'block',
    inline: 'inline'
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
      type: this._types.block,
      before: '# ',
      re: /^#\s+/,
      group: 'header'
    },
    {
      name: 'h2',
      title: 'Header 2',
      symbol: 'icon-jk-header',
      type: this._types.block,
      before: '## ',
      re: /^##\s+/,
      group: 'header'
    },
    {
      name: 'h3',
      title: 'Header 3',
      symbol: 'icon-jk-header',
      type: this._types.block,
      before: '### ',
      re: /^###\s+/,
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
    }
  ]
}

export default Buttons
