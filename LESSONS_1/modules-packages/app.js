// MODULE: main
console.log("App starting ...")
// let config = require("./config.json")
let config = require("./config.js")
// check type of data
// console.log(config.__proto__)
console.log("Supported format: ")
config.forEach( option => console.log("->" , option))
// console.log(config)
console.log("App finish .")