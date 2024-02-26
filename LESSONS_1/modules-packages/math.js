// ES: 
// HW1: refactor code -> arrow functions - COMPACT
// HW2: anonymous vs named functions ?
 function add (a,b) {
    return a + b;
}
module.exports.add = add

module.exports.sub = function (a,b) {
    return a - b;
}
module.exports.mul = function (a,b) {
    return a * b;
}
module.exports.div = function (a,b) {
    return a / b;
}

