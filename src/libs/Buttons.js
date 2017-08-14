class Buttons {
  types = {
    line: 'line',
    area: 'area'
  }

  list = [
    {
      name: 'h1',
      symbol: 'H1',
      type: this.types.line,
      markdown: '# '
    },
    {
      name: 'h2',
      symbol: 'H2',
      type: this.types.line,
      markdown: '## '
    },
    {
      name: 'h3',
      symbol: 'H3',
      type: this.types.line,
      markdown: '### '
    },
    {
      name: 'i',
      symbol: 'I',
      type: this.types.area,
      markdown: '*'
    },
    {
      name: 'b',
      symbol: 'B',
      type: this.types.area,
      markdown: '**'
    },
    {
      name: 'ul',
      symbol: 'UL',
      type: this.types.line,
      markdown: '* '
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
