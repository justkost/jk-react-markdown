import insertText from './insertText'
import Buttons from './Buttons'
const { types } = new Buttons()

export default ({
  button,
  text,
  selectionStr,
  selectionStart,
  selectionEnd,
  selectionlines
}) => {
  if (!text) return ''
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  if (button.type === types.area) {
    let newText = insertText({
      text: text,
      position: selectionStart,
      inserted: button.markdown
    })
    newText = insertText({
      text: newText,
      position: selectionEnd + button.markdown.length,
      inserted: button.markdown
    })
    return newText
  }

  if (button.type === types.line) {
    let newText = text

    selectionlines.forEach((line, index) => {
      newText = insertText({
        text: newText,
        position: line + (index * button.markdown.length),
        inserted: button.markdown
      })
    })

    return newText
  }

  throw new Error('button type error')
}
