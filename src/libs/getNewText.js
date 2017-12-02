import Buttons from './Buttons'
import insertTag from './insertTag'
import getRangeLines from './getRangeLines'
const { types } = new Buttons()

export default ({
  button,
  text,
  textArr,
  selectionStart,
  selectionEnd,
  selectionButtons
}) => {
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  let newText = text
  let { before, after, name, type, re } = button

  // Inline
  if (
    (type === types.inline) &&
    (selectionStart !== selectionEnd)
  ) {
    // Remove mode
    if (selectionButtons.includes(name)) {
      let startString = text.substring(0, selectionStart)
      let middleString = text.substring(
        selectionStart + before.length,
        selectionEnd - after.length
      )
      let endString = text.substring(selectionEnd)
      return startString + middleString.replace(re, '') + endString
    }
    // Add mode
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
  if (type === types.block) {
    let newTextArr = []
    let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)
    // Remove mode
    if (selectionButtons.includes(name)) {
      newTextArr = textArr.map((line, index) => {
        if ((index >= rangeLines.start) && (index <= rangeLines.end)) {
          return line.replace(re, '')
        } else {
          return line
        }
      })
    } else {
      // Add mode
      let olCounter = 0
      newTextArr = textArr.map((line, index) => {
        if (
          (name === 'ol') &&
          (index >= rangeLines.start) && (index <= rangeLines.end)
        ) {
          return `${++olCounter}. ${line}`
        }
        if ((index >= rangeLines.start) && (index <= rangeLines.end)) {
          return before + line
        } else {
          return line
        }
      })
    }
    newText = newTextArr.join('\n')
  }
  // End Block

  return newText
}
