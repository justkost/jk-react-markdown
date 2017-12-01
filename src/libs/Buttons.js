class Buttons {
  types = {
    block: 'block',
    inline: 'inline'
  }

  list = [
    {
      name: 'h1',
      title: 'Header 1',
      symbol: 'icon-header',
      type: this.types.block,
      before: '# ',
      re: /^#\s+/
    },
    {
      name: 'h2',
      title: 'Header 2',
      symbol: 'icon-header',
      type: this.types.block,
      before: '## ',
      re: /^##\s+/
    },
    {
      name: 'h3',
      title: 'Header 3',
      symbol: 'icon-header',
      type: this.types.block,
      before: '### ',
      re: /^###\s+/
    },
    {
      name: 'ul',
      title: 'List',
      symbol: 'icon-list-bullet',
      type: this.types.block,
      before: '* ',
      re: /^[\*\-]\s+/ // eslint-disable-line
    },
    {
      name: 'i',
      title: 'Italic',
      symbol: 'icon-italic',
      type: this.types.inline,
      before: '_',
      after: '_'
    },
    {
      name: 'b',
      title: 'Bold',
      symbol: 'icon-bold',
      type: this.types.inline,
      before: '**',
      after: '**'
    },
    {
      name: 'a',
      title: 'Link',
      symbol: 'icon-link',
      type: this.types.inline,
      before: '[',
      after: '](https://)'
    },
    {
      name: 'img',
      title: 'Image',
      symbol: 'icon-picture',
      type: this.types.inline,
      before: '![alt text](',
      after: ')'
    }
  ]

  getButtonByName = (name) => {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].name === name) {
        return this.list[i]
      }
    }
  }
}

export default Buttons
