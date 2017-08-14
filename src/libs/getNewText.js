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
    let before = typeof button.markdown === 'string' ?
      button.markdown :
      button.markdown.before
    let after = typeof button.markdown === 'string' ?
      button.markdown :
      button.markdown.after
    let offset = typeof button.markdown === 'string' ?
      button.markdown.length :
      button.markdown.before.length
    let newText = insertText({
      text: text,
      position: selectionStart,
      inserted: before
    })
    newText = insertText({
      text: newText,
      position: selectionEnd + offset,
      inserted: after
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
