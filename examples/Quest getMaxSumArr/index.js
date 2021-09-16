const getMaxSabSum = (arr) => {
  let res = 0
  let preSum = 0

  for (let item of arr) {
    if (preSum < 0) {
      preSum = 0
    }

    preSum = preSum + item
    //preSum +=item

    res = res > preSum ? res : preSum
    // res = Math.max(res, preSum);
  }

  return res
}

console.log(getMaxSabSum([-1, -2, 1, 2])) // 1 + 2 = 3
console.log(getMaxSabSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSabSum([-1, -2, -3, -9])) // 0
