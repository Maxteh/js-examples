/*
 * Объекты, ключ может быть только строкой или Символов
 * создать объект можно с помощью любого типа данных
 *
 */
const objWithDifKeysTypes = {
  10: 'this key was a number',
  string: 'this key is string',
}

// Теперь добавим например массив
const arrAsKey = ['a', 'b', 'c']
objWithDifKeysTypes[arrAsKey] = 'this key was an array'

// Теперь добавим например bool
const bool = true
objWithDifKeysTypes[bool] = 'this key was a boolean'

// Теперь перезапишем строку
const str = 'string'
objWithDifKeysTypes[str] = 'this value was override'

// Теперь добавим символ
const sym = Symbol('foo')
objWithDifKeysTypes[sym] = 'this key is symbol'

// Теперь добавим целочисленое значение, и оно будет первым в списке
const number = 0
objWithDifKeysTypes[number] = 'this key is a number become first'

// Не покажет Symbol
for (let key in objWithDifKeysTypes) {
  console.log('#### key: ', key, ', typeof: ', typeof key, ', value: ', objWithDifKeysTypes[key])
}

// Узнать символы
const symbols = Object.getOwnPropertySymbols(objWithDifKeysTypes)
console.log('#### symbols: ', symbols)
