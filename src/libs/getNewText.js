import insertTag from './insertTag'
import removeTag from './removeTag'
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

  // Inline
  if (button.type === types.inline) {
    let newText

    (function leftTrim () {
      if (selectionStr && /^\s/.test(selectionStr)) {
        selectionStr = selectionStr.substring(1)
        selectionStart = selectionStart + 1
        leftTrim()
      }
    })();

    (function rightTrim () {
      if (selectionStr && /\s$/.test(selectionStr)) {
        selectionStr = selectionStr.substring(0, selectionStr.length - 1)
        selectionEnd = selectionEnd - 1
        rightTrim()
      }
    })()

    if (selectionStr) {
      let bigString = text.substring(
        selectionStart - button.before.length,
        selectionEnd + button.after.length
      )
      if (
        bigString.substr(0, button.before.length) === button.before &&
        bigString.substr(bigString.length - button.after.length) === button.after
      ) {
        newText = removeTag({
          text: text,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd,
          before: button.before,
          after: button.after
        })
        return newText
      }
    } else {
      if (button.name === 'img') {
        let text = 'https://'
        button.before += text
      }
    }

    newText = insertTag({
      text: text,
      position: selectionStart,
      inserted: button.before
    })
    newText = insertTag({
      text: newText,
      position: selectionEnd + button.before.length,
      inserted: button.after
    })
    return newText
  }
  // End Inline

  // Block
  if (button.type === types.block) {
    let newText = text

    selectionlines.forEach((line, index) => {
      if (button.re.test(text)) {
        newText = removeTag({
          text: text,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd,
          re: button.re
        })
      } else {
        newText = insertTag({
          text: newText,
          position: line + (index * button.before.length),
          inserted: button.before
        })
      }
    })

    return newText
  }
  // End Block

  throw new Error('button.type error')
}
