class Buttons {
  types = {
    line: 'line',
    area: 'area'
  }

  list = [
    {
      name: 'h3',
      symbol: 'icon-header',
      type: this.types.line,
      markdown: '### '
    },
    {
      name: 'i',
      symbol: 'icon-italic',
      type: this.types.area,
      markdown: '*'
    },
    {
      name: 'b',
      symbol: 'icon-bold',
      type: this.types.area,
      markdown: '**'
    },
    {
      name: 'ul',
      symbol: 'icon-list-bullet',
      type: this.types.line,
      markdown: '* '
    },
    {
      name: 'a',
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
