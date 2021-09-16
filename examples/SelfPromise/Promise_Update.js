const statuses = {
  pending: 'Pending',
  settled: 'Fulfiled',
  rejected: 'Rejected',
}

class MyPromise {
  #status
  #deffered = []
  #value

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('not a function')
    }
    this.#status = statuses.pending
    try {
      fn(this.#resolve.bind(this), this.#reject.bind(this))
    } catch (e) {
      this.#reject.bind(this)(e)
    }
  }

  #resolve(data) {
    if (this.#status === statuses.pending) {
      this.#status = statuses.settled
      this.#value = data
      this.#handle()
    }
  }

  #reject(err) {
    if (this.#status === statuses.pending) {
      this.#status = statuses.rejected
      this.#value = err
      this.#handle()
    }
  }

  #handle() {
    if (this.#status === statuses.rejected && this.#deffered.length === 0) {
      console.log('Unhandled promise rejection', this.#value)
    }

    this.#deffered.forEach((deferred) => {
      setTimeout(() => {
        const callback =
          this.#status === statuses.fulfilled ? deferred.onResolved : deferred.onRejected
        if (callback === null) {
          if (this.#status === statuses.fulfilled) {
            this.#resolve.bind(deferred.promise)(this.#value)
          } else {
            this.#reject.bind(deferred.promise)(this.#value)
          }
          return
        }
        let result
        try {
          result = callback(this.#value)
        } catch (e) {
          this.#reject.bind(deferred.promise)(e)
        }
        this.#resolve.bind(deferred.promise)(result)
      }, 0)
    })
  }

  then(onResolved, onRejected) {
    const promise = new this.constructor(() => {})
    this.#deffered.push({
      onResolved: typeof onResolved === 'function' ? onResolved : null,
      onRejected: typeof onRejected === 'function' ? onRejected : null,
      promise,
    })
    return promise
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
  .then((result) => {
    console.log('result_2', result)
  })
  .catch((err) => err.message ?? err)
