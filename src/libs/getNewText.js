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
  selectionlines,
  headerLevel
}) => {
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  if (!selectionlines.length) {
    selectionlines.push(selectionStart)
  }

  // console.log('selectionStr', selectionStr)
  // console.log('selectionStart', selectionStart)
  // console.log('selectionEnd', selectionEnd)
  // console.log('selectionlines', selectionlines)

  // Area
  if (button.type === types.area) {
    let before
    let after
    let offset
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

    if (selectionStr) {
      let bigString = text.substring(
        selectionStart - before.length,
        selectionEnd + after.length
      )
      if (
        bigString.substr(0, before.length) === before &&
        bigString.substr(bigString.length - after.length) === after
      ) {
        newText = removeTag({
          text: text,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd,
          before: before,
          after: after
        })
        return newText
      }
    } else {
      if (button.name === 'img') {
        let text = 'https://'
        before += text
        offset += text.length
      }
    }

    newText = insertTag({
      text: text,
      position: selectionStart,
      inserted: before
    })
    newText = insertTag({
      text: newText,
      position: selectionEnd + offset,
      inserted: after
    })
    return newText
  }
  // End Area

  // Line
  if (button.type === types.line) {
    let newText = text
    let markdownText = button.markdown

    if (headerLevel && button.name === 'h') {
      switch (headerLevel) {
        case 1:
          markdownText = '# '
          break
        case 2:
          markdownText = '## '
          break
        case 3:
          markdownText = '### '
          break
        case 4:
          markdownText = '#### '
          break
        case 5:
          markdownText = '##### '
          break
        case 6:
          markdownText = '######'
          break
      }
    }

    selectionlines.forEach((line, index) => {
      newText = insertTag({
        text: newText,
        position: line + (index * markdownText.length),
        inserted: markdownText
      })
    })

    return newText
  }
  // End Line

  throw new Error('button.type error')
}
