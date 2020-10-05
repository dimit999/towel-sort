module.exports = function towelSort (matrix) {
  let correctOrderArray = []
  let resultArray = []
  if (!Array.isArray(matrix) || matrix.length == 0) return []
  if (matrix.length == 1) return matrix
  if (matrix.length > 1) {
      matrix.forEach( (item, index) => {
        if ((index + 1)%2 == 0) {
          correctOrderArray.push(item.slice().reverse())
      } else {
        correctOrderArray.push(item)
      }
    })
  }
  correctOrderArray.forEach((item) => {
    item.forEach((i) => {
      resultArray.push(i)
    })
  })
  return resultArray
}