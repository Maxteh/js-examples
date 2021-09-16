let ladder = {
  step: 0,
  up() {
    this.step++
  },
  down() {
    this.step--
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log('ladder: ', this.step)
  },
}

ladder.up()
ladder.up()
ladder.down()
ladder.showStep() // 1

let ladderUpdate = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log('ladderUpdate: ', this.step)
  },
}

ladderUpdate.up().up().up().down().showStep() // 1
