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
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  if (!selectionlines.length) {
    selectionlines.push(selectionStart)
  }
  
  console.log('selectionStr', selectionStr)
  console.log('selectionStart', selectionStart)
  console.log('selectionEnd', selectionEnd)
  console.log('selectionlines', selectionlines)

  if (button.type === types.area) {
    let before
    let after
    let offset

    if (typeof button.markdown === 'string') {
      before = button.markdown
      after = button.markdown
      offset = button.markdown.length
    } else if (typeof button.markdown === 'object') {
      before = button.markdown.before
      after = button.markdown.after
      offset = button.markdown.before.length
    } else {
      throw new Error('button.markdown is not string or object')
    }

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

  throw new Error('button.type error')
}
