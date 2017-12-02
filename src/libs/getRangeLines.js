export default (textArr, selectionStart, selectionEnd) => {
  let previousLinesLength = 0
  let nextLinesLength = 0
  let startLineIndex = 0
  let endLineIndex = 0
  textArr.forEach((line, index) => {
    nextLinesLength += line.length + 1
    if (
      (selectionStart >= previousLinesLength) &&
      (selectionStart < nextLinesLength)
    ) {
      startLineIndex = index
    }
    if (
      (selectionEnd >= previousLinesLength) &&
      (selectionEnd < nextLinesLength)
    ) {
      endLineIndex = index
    }
    previousLinesLength += line.length + 1
  })
  return {
    start: startLineIndex,
    end: endLineIndex
  }
}
