export default ({
  text,
  selectionStart,
  selectionEnd,
  before,
  after
}) => {
  let newText = text.substring(0, selectionStart - before.length)
  newText += text.substring(selectionStart, selectionEnd)
  newText += text.substring(selectionEnd + after.length)
  return newText
}
