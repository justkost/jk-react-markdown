import getRangeLines from './getRangeLines'

export default ({
  text,
  textArr,
  selectionStart,
  selectionEnd,
  list,
  types
}) => {
  let selectionString = text.substring(selectionStart, selectionEnd)
  let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)
  let result = []

  list.forEach(button => {
    if (button.type === types.inline) {
      if (button.re && button.re.test(selectionString)) {
        result.push(button.name)
      }
    }
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
    if (button.type === types.code) {
      if (
        (rangeLines.start !== rangeLines.end) &&
        (textArr[rangeLines.start] === button.before) &&
        (textArr[rangeLines.end] === button.after)
      ) {
        result.push(button.name)
      }
    }
  })

  return result
}
