'use strict'

const obj = {
  name: 'Test',
  createName() {
    return 'New ' + this.name;
  },
  getName(min, max){
    return this.createName() + min + max;
  }
}

function hash(args){
  return [].join.apply(args);
}


function fabrick(fn, hash) {
  const cache = new Map();
  return function() {
    const key = hash(arguments);
    console.log(key)
    if (cache.has(key)){
      return cache.get(key);
    }
    const result = fn.apply(this, arguments);
    cache.set(key, result);

    return result;
  }
}

obj.getName = fabrick(obj.getName, hash);

obj.getName(1,2)