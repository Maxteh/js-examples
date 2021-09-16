const undefinedable = undefined
const nullable = null
const booleanF = false
const number = 0
const string = '0'
const stringNaN = 's0'
const stringEmpty = ''
const arr = ['a', 'b', 'c']
const obj = {
  a: 'test',
  vlaue: 10,
}

// To String
function toStringConsole(value) {
  const newvalue = String(value)
  console.log('value as String: ', newvalue, ' || type: ', value === null ? 'null' : typeof value)
}

// toStringConsole(undefinedable)
// toStringConsole(nullable)
// toStringConsole(booleanF)
// toStringConsole(number)

// To Number
function toNumberConsole(value) {
  const newvalue = Number(value)
  console.log('value as Number: ', newvalue, ' || type: ', value === null ? 'null' : typeof value)
}

// toNumberConsole(undefinedable)
// toNumberConsole(nullable)
// toNumberConsole(booleanF)
// toNumberConsole(number)
// toNumberConsole(string)
// toNumberConsole(stringNaN)
// toNumberConsole(stringEmpty)

// To Boolean
function toBooleanConsole(value) {
  const newvalue = Boolean(value)
  console.log('value as Boolean: ', newvalue, ' || type: ', value === null ? 'null' : typeof value)
}

toBooleanConsole(undefinedable)
toBooleanConsole(nullable)
toBooleanConsole(booleanF)
toBooleanConsole(number)
toBooleanConsole(string)
toBooleanConsole(stringEmpty)
