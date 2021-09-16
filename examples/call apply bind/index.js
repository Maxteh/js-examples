/**
 * Create bind method
 *
 */

Function.prototype.bind = function (context, ...argsBind) {
  const fn = this

  return function (...args) {
    return fn.apply(context, argsBind.concat(args))
  }
}
