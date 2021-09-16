/**
 * Create function wich retrurn array with uniq values from given array
 */

const arrayToUniq = [1, 1, 2, 2, 4, 2, 3, 7, 3]

/**
 * First variant
 */

function uniqArray(arr) {
  return [...new Set(arr)]
}

/**
 * Second variant
 */

function uniqArraySecond(arr) {
  const uniqArr = []

  for (item of arr) {
    if (uniqArr.indexOf(item) === -1) {
      uniqArr.push(item)
    }
  }

  return uniqArr
}

/**
 * Third variant
 */

function uniqArrayThird(arr) {
  const obj = {}

  arr.forEach((item) => {
    obj[item] = true
  })
  return Object.keys(obj).map((item) => +item)
}

/**
 * Fourth variant
 */

function uniqArrayFourth(arr) {
  return arr.filter((item, index, self) => {
    // console.log(
    //   'item',
    //   item,
    //   'index',
    //   index,
    //   'self.indexOf(item)',
    //   self.indexOf(item),
    //   'self',
    //   self
    // )
    return self.indexOf(item) === index
  })
}
