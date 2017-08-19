export default ({ text, position, inserted }) => {
  if (text === undefined || position === undefined || !inserted) {
    throw new Error('Missing argument')
  }
  let newText = text.substring(0, position) +
    inserted +
    text.substring(position)
  return newText
}
