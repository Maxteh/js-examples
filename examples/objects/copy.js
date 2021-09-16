function copy(o) {
  const copy = Object.create(Object.getPrototypeOf(o))
  // console.log('copy', copy);
  const propNames = Object.getOwnPropertyNames(o)
  // console.log('propNames', propNames);

  propNames.forEach(function (name) {
    const desc = Object.getOwnPropertyDescriptor(o, name)
    // console.log('desc', desc);
    Object.defineProperty(copy, name, desc)
  })

  return copy
}

const o1 = { a: 1, b: 2 }
const o2 = copy(o1) // теперь o2 выглядит также, как и o1
