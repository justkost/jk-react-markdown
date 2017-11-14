export default ({
  text,
  selectionStart,
  selectionEnd,
  before,
  after,
  re
}) => {
  if (re) {
    return text.replace(re, '')
  } else {
    let newText = text.substring(0, selectionStart - before.length)
    newText += text.substring(selectionStart, selectionEnd)
    newText += text.substring(selectionEnd + after.length)
    return newText
  }
}
