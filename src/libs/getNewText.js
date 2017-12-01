import Buttons from './Buttons'
import insertTag from './insertTag'
// import removeTag from './removeTag'
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

  let newText = ''

  // Inline
  if (button.type === types.inline) {
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
    let previousLinesLength = 0
    let nextLinesLength = 0
    let newTextArr = []
    let startLineIndex = 0
    let endLineIndex = 0

    textArr.forEach((line, index) => {
      nextLinesLength += line.length + 1
      if (
        (selectionStart >= previousLinesLength) &&
        (selectionStart < nextLinesLength)
      ) {
        startLineIndex = index
      }
      if (
        (selectionEnd >= previousLinesLength) &&
        (selectionEnd < nextLinesLength)
      ) {
        endLineIndex = index
      }
      previousLinesLength += line.length + 1
    })

    newTextArr = textArr.map((line, index) => {
      if (
        (button.name === 'ol') &&
        (index >= startLineIndex) && (index <= endLineIndex)
      ) {
        return `${index + 1}. ${line}`
      }
      if ((index >= startLineIndex) && (index <= endLineIndex)) {
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
