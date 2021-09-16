/**
 * First variant
 */
function sum_1(number_init = 0) {
  let sum = number_init

  function cb(number_next = 0) {
    sum += number_next
    return cb
  }

  // Вся хитрость была тут, которая сбивала меня с толку
  cb.valueOf = cb.toString = function () {
    return sum
  }
  // cb[Symbol.toPrimitive] = function () {
  //   return sum
  // }

  return cb
}

const res = sum_1(1)(2)(3)(4)
const res = sum_1()(2)(3)(4)
const res = sum_1(1)()(3)(4)

/**
 * Second variant
 */
function sum_2(number_init, number_next) {
  const [acc, value] = Array.isArray(number_init) ? [number_init[0], number_next] : [0, number_init]
  const total = acc + (value || 0)

  sum_2.valueOf = sum_2.toString = function () {
    return total
  }

  return sum_2.bind(null, [total])
}

const res = sum_2(1)()(3)(4)

/**
 * Third variant
 */
function sum_3(value = 0) {
  return (function next(previousSum = 0) {
    return Object.defineProperties(
      // object
      function nextSum(value = 0) {
        return next(previousSum + Number(value))
      },
      // properties
      {
        valueOf: {
          // descriptor
          value: () => previousSum,
        },
        toString: {
          // descriptor
          value: () => previousSum,
        },
      }
    )
  })(value)
}

const res = sum_3(1)()(3)()
const res_2 = sum_3(1)()
const res_3 = res_2(3)()
console.log(res + '', res_2 + '', res_3 + '')
