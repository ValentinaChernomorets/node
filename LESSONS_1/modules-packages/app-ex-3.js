console.log("App starting ...")
// ES destructurization
const {div, mul, add, sub} = require("./math")

const add = math.add
let result = add(20, 30)
console.log(result)

console.log("App finish .")