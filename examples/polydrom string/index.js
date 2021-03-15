/**
 * Create function wich get a string and check is it a polydrom
 */

const stringToCheck = 'Tenet'

function checkString(str) {
  return typeof str === 'string' && str !== ''
}

function cleanString(str) {
  const cleanedString = checkString(str) && str.toLowerCase()
  return cleanedString
}

/**
 * First variant
 */
function isPolydrom(str) {
  const reverseStr = cleanString(str) && cleanString(str).split('').reverse().join('')

  return reverseStr && cleanString(str) === reverseStr
}

/**
 * Second variant
 */
function checkChar(char, idx, arr) {
  return char === arr[arr.length - idx - 1]
}

function isPolydromSecond(str) {
  const cleanedString = cleanString(str)
  const result =
    cleanedString &&
    cleanedString.split('').every((char, idx) => checkChar(char, idx, cleanedString))

  return result
}

/**
 * Third variant
 */
function isPolydromThird(str) {
  if (!cleanString(str)) {
    return false
  }

  const cleanedIter = cleanString(str).split('')

  for (let char of cleanedIter) {
    if (char !== cleanedIter.pop()) return false
  }

  return true
}

/**
 * Fourth variant
 */
function isPolydromFourth(str) {
  if (!cleanString(str)) {
    return false
  }
  const cleanedString = cleanString(str)
  const lenIter = cleanedString.length
  for (let i = 0; i < lenIter / 2; i++) {
    if (cleanedString[i] !== cleanedString[lenIter - i - 1]) return false
  }

  return true
}
