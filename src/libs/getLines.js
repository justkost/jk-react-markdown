export default (start, end, text) => {
  let result = []
  let endLines = []
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      endLines.push(i)
    }
  }
  for (let i = 0; i < endLines.length; i++) {
    let endLine = endLines[i]
    if (endLine > start && !result.length) {
      if (i > 0) {
        result.push(endLines[i - 1] + 1)
      } else {
        result.push(0)
      }
    }
    if (endLine > start &&
      endLine < end &&
      endLine < (text.length - 1)) {
      result.push(endLine + 1)
    }
  }
  if (!result.length && text[text.length - 1] !== '\n') {
    if (endLines.length) {
      result.push(endLines[endLines.length - 1] + 1)
    } else {
      result.push(0)
    }
  }
  return result
}
