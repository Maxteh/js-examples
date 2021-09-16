let calculator = {
  numberOne: null,
  numberTwo: null,

  read() {
    this.numberOne = 10
    this.numberTwo = 5
  },

  sum() {
    return this.numberOne + this.numberTwo
  },

  mul() {
    return this.numberOne * this.numberTwo
  },
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
