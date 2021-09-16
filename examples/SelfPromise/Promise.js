const statuses = {
  pending: 'Pending',
  settled: 'Fulfiled',
  rejected: 'Rejected',
}

class MyPromise {
  #status
  #thenFn = () => {}
  #catchFn = () => {}

  constructor(fn) {
    this.#status = statuses.pending
    fn(this.#resolve.bind(this), this.#reject.bind(this))
  }

  #resolve(result) {
    if (this.#status === statuses.pending) {
      this.#status = statuses.settled
      try {
        this.#thenFn(result)
      } catch (err) {
        this.#status = statuses.rejected
        this.#catchFn(err)
      }
    }
  }

  #reject(err) {
    if (this.#status === statuses.pending) {
      this.#status = statuses.rejected
      this.#catchFn(err)
    }
  }

  then(onResolved, onRejected) {
    if (onResolved) {
      this.#thenFn = onResolved
    }
    if (onRejected) {
      this.#catchFn = onRejected
    }
    return this
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}

const testPromise = new MyPromise((resolve) => {
  resolve('resolved')
})

const promiseInstance = testPromise
  .then((result) => {
    console.log('result', result)
  })
  .catch((err) => err.message ?? err)
