import getRangeLines from './getRangeLines'
import Buttons from './Buttons'
const { list, types } = new Buttons()

export default (text, textArr, selectionStart, selectionEnd) => {
  let selectionString = text.substring(selectionStart, selectionEnd)
  let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)
  let result = []

  list.forEach(button => {
    if (button.type === types.block) {
      let buttonsNames = []
      textArr.forEach((line, index) => {
        if (
          (index >= rangeLines.start) &&
          (index <= rangeLines.end) &&
          button.re.test(line)
        ) {
          buttonsNames.push(button.name)
        }
      })
      if (buttonsNames.length) {
        result.push(buttonsNames[0])
      }
    }
    if (button.type === types.inline) {
      if (button.re && button.re.test(selectionString)) {
        result.push(button.name)
      }
    }
  })

  return result
}
