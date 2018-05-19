import insertStr from './insertStr'
import getRangeLines from './getRangeLines'

export default ({
  button,
  text,
  textArr,
  selectionStart,
  selectionEnd,
  selectionButtons,
  getButtonByName,
  types
}) => {
  if (typeof text !== 'string') throw new Error('text not string')
  if (typeof button !== 'object') throw new Error('button not object')

  let newText = text
  let { before, after, name, type, re } = button

  // Type inline
  if (type === types.inline) {
    if (selectionButtons.includes(name)) {
      // Remove mode
      let startString = text.substring(0, selectionStart)
      let middleString = text.substring(
        selectionStart + before.length,
        selectionEnd - after.length
      )
      let endString = text.substring(selectionEnd)
      return startString + middleString.replace(re, '') + endString
    }
    // Add mode
    newText = insertStr({
      text: text,
      position: selectionEnd,
      str: after
    })
    newText = insertStr({
      text: newText,
      position: selectionStart,
      str: before
    })
  }
  // End Type inline

  // Type block
  if (type === types.block) {
    let newTextArr = []
    let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)
    if (selectionButtons.includes(name)) {
      // Remove mode
      newTextArr = textArr.map((line, index) => {
        if ((index >= rangeLines.start) && (index <= rangeLines.end)) {
          return line.replace(re, '')
        } else {
          return line
        }
      })
    } else {
      let replaceButton = null

      selectionButtons.forEach(selectionName => {
        let selectionButton = getButtonByName(selectionName)
        if (
          (selectionButton.group && button.group) &&
          (selectionButton.group === button.group)
        ) {
          replaceButton = selectionButton
        }
      })

      // Change mode
      if (replaceButton) {
        newTextArr = textArr.map((line, index) => {
          if ((index >= rangeLines.start) && (index <= rangeLines.end)) {
            return line.replace(replaceButton.re, '')
          } else {
            return line
          }
        })
      }

      // Add mode
      let olCounter = 0
      let tmpTextArr = newTextArr.length ? newTextArr : textArr
      newTextArr = tmpTextArr.map((line, index) => {
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
  // End Type block

  // Type code
  if (type === types.code) {
    let newTextArr = []
    let rangeLines = getRangeLines(textArr, selectionStart, selectionEnd)
    if (selectionButtons.includes(name)) {
      // Remove mode
      newTextArr = textArr.filter((line, index) => {
        if ((index === rangeLines.start) || (index === rangeLines.end)) {
          return false
        } else {
          return true
        }
      })
    } else {
      // Add mode
      let tmpTextArr = newTextArr.length ? newTextArr : textArr
      tmpTextArr.forEach((line, index) => {
        if (index === rangeLines.start) {
          newTextArr.push(button.before)
        }
        newTextArr.push(line)
        if (index === rangeLines.end) {
          newTextArr.push(button.after)
        }
      })
    }
    newText = newTextArr.join('\n')
  }
  // End code

  return newText
}
