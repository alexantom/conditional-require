const { None, HTTP, AWS } = require('./sub')

const NoneFn = None();
const HTTPFn = HTTP();

console.log(new  NoneFn().getName())
console.log(new HTTPFn().getName())
