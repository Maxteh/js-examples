/**
 * Create function witch get a array of arrays in different
 * depth, and return array with only numbers
 */

const arrayToUpdate = [1, [2, [3, [4, 5]]]]

/**
 * First variant
 */

function beutifyArray(arr) {
  return arr.flat(Infinity)
}

/**
 * Second variant
 */

function reducer(acc, item) {
  if (Array.isArray(item)) {
    acc = [...acc, ...beutifyArraySecond(item)]
  } else {
    acc.push(item)
  }

  return acc
}

function beutifyArraySecond(arr) {
  return arr.reduce(reducer, [])
}
