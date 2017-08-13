class Buttons {
  types = {
    line: 'lines',
    area: 'area'
  }

  list = [
    {
      name: 'b',
      symbol: 'B',
      type: this.types.area
    },
    {
      name: 'ul',
      symbol: 'UL',
      type: this.types.line
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
