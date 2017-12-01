class Buttons {
  types = {
    block: 'block',
    inline: 'inline'
  }

  list = [
    {
      name: 'h1',
      title: 'Header 1',
      symbol: 'icon-jk-header',
      type: this.types.block,
      before: '# ',
      re: /^#\s+/
    },
    {
      name: 'h2',
      title: 'Header 2',
      symbol: 'icon-jk-header',
      type: this.types.block,
      before: '## ',
      re: /^##\s+/
    },
    {
      name: 'h3',
      title: 'Header 3',
      symbol: 'icon-jk-header',
      type: this.types.block,
      before: '### ',
      re: /^###\s+/
    },
    {
      name: 'ul',
      title: 'List',
      symbol: 'icon-jk-list-bullet',
      type: this.types.block,
      before: '* ',
      re: /^[\*\-]\s+/ // eslint-disable-line
    },
    {
      name: 'ol',
      title: 'List',
      symbol: 'icon-jk-list-numbered',
      type: this.types.block,
      before: '1. ',
      re: /^\d\.\s+/ // eslint-disable-line
    },
    {
      name: 'i',
      title: 'Italic',
      symbol: 'icon-jk-italic',
      type: this.types.inline,
      before: '_',
      after: '_'
    },
    {
      name: 'b',
      title: 'Bold',
      symbol: 'icon-jk-bold',
      type: this.types.inline,
      before: '**',
      after: '**'
    },
    {
      name: 'a',
      title: 'Link',
      symbol: 'icon-jk-link',
      type: this.types.inline,
      before: '[',
      after: '](https://)'
    },
    {
      name: 'img',
      title: 'Image',
      symbol: 'icon-jk-picture',
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
