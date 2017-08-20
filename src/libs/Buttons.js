class Buttons {
  types = {
    line: 'line',
    area: 'area'
  }

  list = [
    {
      name: 'h3',
      title: 'Header',
      symbol: 'icon-header',
      type: this.types.line,
      markdown: '### '
    },
    {
      name: 'i',
      title: 'Italic',
      symbol: 'icon-italic',
      type: this.types.area,
      markdown: '_'
    },
    {
      name: 'b',
      title: 'Bold',
      symbol: 'icon-bold',
      type: this.types.area,
      markdown: '**'
    },
    {
      name: 'ul',
      title: 'List',
      symbol: 'icon-list-bullet',
      type: this.types.line,
      markdown: '* '
    },
    {
      name: 'a',
      title: 'Link',
      symbol: 'icon-link',
      type: this.types.area,
      markdown: {
        before: '[',
        after: '](https://)'
      }
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
