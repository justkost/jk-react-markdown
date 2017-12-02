import Buttons from './Buttons'
import insertTag from './insertTag'
// import removeTag from './removeTag'
import getRangeLines from './getRangeLines'
const { types } = new Buttons()

export default ({
  button,
  text,
  textArr,
  selectionStart,
  selectionEnd
}) => {
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  let newText = text

  // Inline
  if (
    (button.type === types.inline) &&
    (selectionStart !== selectionEnd)
  ) {
    let { before, after } = button
    newText = insertTag({
      text: text,
      position: selectionEnd,
      inserted: after
    })
    newText = insertTag({
      text: newText,
      position: selectionStart,
      inserted: before
    })
  }
  // End Inline

  // Block
  if (button.type === types.block) {
    let newTextArr = []

    let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)

    newTextArr = textArr.map((line, index) => {
      if (
        (button.name === 'ol') &&
        (index >= rangeLines.start) && (index <= rangeLines.end)
      ) {
        return `${index + 1}. ${line}`
      }
      if ((index >= rangeLines.start) && (index <= rangeLines.end)) {
        return button.before + line
      } else {
        return line
      }
    })

    newText = newTextArr.join('\n')
  }
  // End Block

  return newText
}
