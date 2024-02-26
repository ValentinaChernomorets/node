// ES: 
// HW1: refactor code -> arrow functions - COMPACT
// HW2: anonymous vs named functions ?
// Answer: 
// 1. Anonymous functions - is function which do not have name. It's use 
// where need to pass a function as an argument to another function. 
// Anonymous functions are not hoisted in the same sense as named functions.
// Their variables are raised, but the functions themselves are not.
// 2. Named functions - in JS are typically hoisting, which means they can be 
// called before they are actually defined in the code.
 function add (a,b) {
    return a + b;
}
module.exports.add = add

module.exports.sub = (a,b) => {
    return a - b;
}
module.exports.mul = (a,b) => {
    return a * b;
}
module.exports.div = (a,b) => {
    return a / b;
}
