export default ({ text, position, str }) => {
  if (text === undefined || position === undefined || !str) {
    throw new Error('Missing argument')
  }

  return text.substring(0, position) + str + text.substring(position)
}
